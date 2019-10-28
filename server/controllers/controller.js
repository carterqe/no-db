// const data = require('../data.json')

data = [
  {
    "name": "lemon",
    "id": 1,
    "img": "https://i.pinimg.com/originals/8b/e5/6b/8be56bd2a087720f50271e95769fe404.png"
  },
  {
    "name": "apple",
    "id": 2,
    "img": "https://shopwestern.co/wp-content/uploads/2019/04/apple-with-shades.png"
  },
  {
    "name": "orange",
    "id": 3,
    "img": "http://media.tumblr.com/d66f9992d3d8487f6b76d9c53532e6ea/tumblr_inline_mzou6hWUhS1qga65s.png"
  },
  {
    "name": "banana",
    "id": 4,
    "img": "https://dcassetcdn.com/w1k/submissions/450500/450948_f186.jpg"
  },
  {
    "name": "pineapple",
    "id": 5,
    "img": "https://www.pngfind.com/pngs/m/180-1808872_free-png-download-pineapple-wearing-sunglasses-png-pineapple.png"
  },
  {
    "name": "watermelon",
    "id": 6,
    "img": "https://thumbs.dreamstime.com/b/mr-watermelon-15331793.jpg"
  }
]

items = []

module.exports = {
  getItems: (req, res) => {
    res.json(data)
  },
  getCartItems: (req, res) => {
    res.status(201).json(items)
  },
  addToCart: (req, res) => {
    const item = req.body.item
    items.push(item)
    res.status(201).json(items)
  },
  viewCart: (req,res) => {
    res.status(200).send(fruitInCart)
  },
  removeFromCart: (req, res) => {
    const {id} = req.params
    const index = items.findIndex(el => el.id === +id)
    items.splice(index, 1)
    res.status(201).json(items)
  },
  updateItem: (req, res) => {
    const {id} = req.params
    const index = data.findIndex(el => el.id === +id)
    data[index] = req.body.item
    res.status(201).json(data)
  }
}