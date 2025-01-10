git pull

set "today=%date:~0,4%-%date:~5,2%-%date:~8,2%"

git add .
git commit -m "Update on %today%"
git push -u origin main
