module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get('db')
        db.get_posts
    }
}