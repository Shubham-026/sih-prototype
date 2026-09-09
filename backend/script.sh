#!/bin/bash

# ============================================================
# SkillHive Backend Scaffolding Script (macOS Terminal)
#
# Run this FROM INSIDE your existing "backend" folder.
# It creates all files/folders directly here — it does NOT
# create a new top-level project folder.
#
# Usage:
#   cd backend
#   chmod +x create_backend_structure.sh
#   ./create_backend_structure.sh
# ============================================================

echo "Creating SkillHive backend structure in: $(pwd)"
echo ""

# ---------- Top-level files ----------
touch main.py
touch database.py
touch config.py
touch models.py
touch requirements.txt
touch .env
touch README.md

# ---------- .gitignore ----------
cat > .gitignore << 'EOF'
# Python
__pycache__/
*.py[cod]
*.pyc
venv/
env/
.venv/

# Environment variables / secrets
.env
*.env.local

# Firebase / credentials
*firebase-adminsdk*.json
serviceAccountKey.json

# OS / editor junk
.DS_Store
Thumbs.db
.vscode/
.idea/

# Logs
*.log

# Distribution / build
build/
dist/
*.egg-info/
EOF

# ---------- routes/ ----------
mkdir -p routes
touch routes/__init__.py
touch routes/students.py
touch routes/industries.py
touch routes/opportunities.py
touch routes/matching.py

# ---------- logic/ ----------
mkdir -p logic
touch logic/__init__.py
touch logic/skill_gap.py
touch logic/matching_score.py

# ---------- db/ ----------
mkdir -p db
touch db/__init__.py
touch db/student_queries.py
touch db/industry_queries.py
touch db/opportunity_queries.py

# ---------- scripts/ ----------
mkdir -p scripts
touch scripts/seed_data.py

echo "Done. Structure created:"
echo ""

# Print the tree (falls back to find if 'tree' isn't installed)
if command -v tree &> /dev/null; then
    tree
else
    find . -not -path '*/.git*' | sed -e 's;[^/]*/;  ;g;s;  \([^ ]\);|-\1;'
fi

echo ""
echo "Next steps:"
echo "  python3 -m venv venv"
echo "  source venv/bin/activate"
echo "  pip install fastapi uvicorn asyncpg python-dotenv pydantic"
echo "  pip freeze > requirements.txt"