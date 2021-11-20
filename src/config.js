const PORT = process.env.PORT || 5000
const SECRET = 'kalit'

const pgConfig = {
	host: 'localhost',
	post: 5432,
	user: 'ahror',
	password: '111133',
	database: 'score'
}

module.exports = { 
	pgConfig,
	PORT,
	SECRET
}