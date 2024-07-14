/* GET Hompage*/
const index = (req, res) => {
    res.render('index', { title: "Trvlr Getaways"});
};

module.exports = {
    index
}