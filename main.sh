if [ $NODE_ENV == "production" ]
then
  npm run build
  npm start
else 
  npm run dev
fi