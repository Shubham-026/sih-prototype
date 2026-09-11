from enum import Enum
from typing import List, Optional
from pydantic import BaseModel, Field, HttpUrl, field_validator



# 1. Enums


class UserRole(str, Enum):
    STUDENT = "student"
    INDUSTRY = "industry"
    ADMIN = "admin"


class OpportunityType(str, Enum):
    INTERNSHIP = "internship"
    JOB = "job"
    APPRENTICESHIP = "apprenticeship"


class ApplicationStatus(str, Enum):
    APPLIED = "applied"
    SHORTLISTED = "shortlisted"
    INTERVIEW = "interview"
    ACCEPTED = "accepted"
    REJECTED = "rejected"



# 2. Skill & Portfolio Models


class SkillSchema(BaseModel):
    id: int
    name: str

    model_config = {"from_attributes": True}


class StudentSkillInput(BaseModel):
    skill_id: int
    proficiency: float = Field(default=1.0, ge=0.0, le=1.0)


class CertificateCreate(BaseModel):
    name: str
    verifiable_link: Optional[HttpUrl] = None
    certificate_id: Optional[str] = None



# 3. Opportunity & Requirement Models


class RequiredSkillInput(BaseModel):
    skill_id: int
    weight: float = Field(default=1.0, gt=0.0)


class OpportunityCreate(BaseModel):
    title: str
    company_id: int
    opportunity_type: OpportunityType
    description: str
    auto_shortlist_threshold: float = Field(default=70.0, ge=0.0, le=100.0)
    skills: List[RequiredSkillInput]

    @field_validator("skills")
    @classmethod
    def validate_unique_skills(
        cls, skills: List[RequiredSkillInput]
    ) -> List[RequiredSkillInput]:
        seen_ids = set()
        for item in skills:
            if item.skill_id in seen_ids:
                raise ValueError(f"Duplicate skill_id detected: {item.skill_id}")
            seen_ids.add(item.skill_id)
        return skills



# 4. Matching Engine & Response Models

class CandidateMatchResponse(BaseModel):
    student_id: int
    student_name: str
    match_score: float
    is_shortlisted: bool

    model_config = {"from_attributes": True}

    @field_validator("match_score")
    @classmethod
    def round_match_score(cls, v: float) -> float:
        return round(v, 2)


class SkillGapReportResponse(BaseModel):
    opportunity_id: int
    missing_skills: List[SkillSchema]
    curated_youtube_urls: List[str]

    model_config = {"from_attributes": True}