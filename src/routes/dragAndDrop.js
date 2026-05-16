const express = require('express');
const router = express.Router();

const title = 'Playground | Drag and Drop';
const numberOfLists = 3
const numberOfItemsPerList = 6
const lists = []
for (let i = 1; i <= numberOfLists; i++) {
  const list = {
    title: "List " + i,
    items: []
  };
  for (let j = 1; j <= numberOfItemsPerList; j++) {
    list.items.push({
      id: `${i}-${j}`,
      title: "Item " + j,
    });
  }
  lists.push(list);
}

router.get('/', function (req, res, next) {
  res.render('drag-and-drop/index', {title, lists});
});

module.exports = router;
