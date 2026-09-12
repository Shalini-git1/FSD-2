app.set('view engine', 'ejs'); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.get('/', async (req, res) => {
    const students = await Student.find();
    res.render('apphome', { students });
});