
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const path= require('path');
// const API_NLP='https://api.meaningcloud.com'

const app = express();
const port = 3000;

dotenv.config();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:8100',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use(express.static('dist'))

app.get('/',(req,res)=>{
    res.sendFile('../../dist/index.html');
});

app.get('/getPlayList',(req, res)=>{
    const {id} = req.query;
    if(id){
        res.send(PLAYLIST[id])
        return;
    }
})

app.get('/getPlayLists',(req, res)=>{
    res.send(PLAYLIST)
})

app.get('/music',(req,res)=>{
    const {name} = req.query;
    res.sendFile(path.join(__dirname, '../../assets', name));
})

app.post('/analizeNews', async (req, res) => {
    // const {url} = req.body
    // const urlFetch=`${API_NLP}/sentiment-2.1?${new URLSearchParams({
    //     key:process.env.API_KEY,
    //     of:'json',
    //     url:url,
    //     lang:'en'
    // })}`
    // fetch(urlFetch,{
    //     method:'POST',
    // }).then((resolve)=>{
    //     if(resolve.status===200){
    //         return resolve.json();
    //     }
    //     res.sendStatus(500)
    // }).then((result)=>{
    //     res.send(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

});

app.listen(port, () => {
    console.log(`Server is running`);
});

const MUSIC=
[
    {
        index:0,
        title:"That's What You Get",
        band:"Paramore",
        music:"http://localhost:3000/music?name=Paramore-Thats-What-You-Get.mp3",
        image:"https://images-na.ssl-images-amazon.com/images/I/91wuBxVoekL._AC_SX425_.jpg",
    },
    {
        index:1,
        title:"Pressure",
        band:"Paramore",
        music:"http://localhost:3000/music?name=Paramore-Pressure.mp3",
        image:"https://i2.rozetka.ua/goods/12577426/96217768_images_12577426294.jpg",
    },
    {
        index:2,
        title:"crushcrushcrush",
        band:"Paramore",
        music:"http://localhost:3000/music?name=Paramore - crushcrushcrush (HQ Audio).mp3",
        image:"https://images-na.ssl-images-amazon.com/images/I/91wuBxVoekL._AC_SX425_.jpg",
    },
    {
        index:3,
        title:"Rose Colored Boy",
        band:"Paramore",
        music:"http://localhost:3000/music?name=Paramore - Rose Colored Boy.mp3",
        image:"https://images-na.ssl-images-amazon.com/images/I/41V%2BJ3EqJhL._AC_.jpg",
    },
    {
        index:4,
        title:"Looking Up",
        band:"Paramore",
        music:"http://localhost:3000/music?name=Paramore - Looking Up (Brand New Eyes Deluxe Edition).mp3",
        image:"https://images-na.ssl-images-amazon.com/images/I/81m0BptHZ4L._AC_SL1425_.jpg",
    },
]

const RIOT=[
    {
        index:0,
        title:"That's What You Get",
        band:"Paramore",
        music:"http://localhost:3000/music?name=Paramore-Thats-What-You-Get.mp3",
        image:"https://images-na.ssl-images-amazon.com/images/I/91wuBxVoekL._AC_SX425_.jpg",
    },
    {
        index:1,
        title:"crushcrushcrush",
        band:"Paramore",
        music:"http://localhost:3000/music?name=Paramore - crushcrushcrush (HQ Audio).mp3",
        image:"https://images-na.ssl-images-amazon.com/images/I/91wuBxVoekL._AC_SX425_.jpg",
    },
]

const PLAYLIST=[
    {
        name:'Best of Paramore',
        isAlbum:false,
        band:'Paramore',
        thumb:'https://br.nacaodamusica.com/wp-content/uploads/2017/06/paramore.jpg',
        musics:MUSIC,
    },
    {
        name:'Paramore Riot',
        isAlbum:true,
        band:'Paramore',
        thumb:'https://images-na.ssl-images-amazon.com/images/I/91wuBxVoekL._AC_SX425_.jpg',
        musics:RIOT,
    },
]
