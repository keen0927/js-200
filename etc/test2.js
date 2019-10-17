const sample = [
  {
    "id": "0",
    "user": "keen",
    "tags": [
      {
        'type': 'lager',
        'name': '11',
        'value': 'cass',
      }
    ]
  },
  {
    "id": "1",
    "user": "keen2",
    "tags": [
      {
        'type': 'lager',
        'name': '22',
        'value': 'Kcloud',
      },
      {
        'name': '24',
        'value': 'Kcloud',
      },
    ]
  },
  {
    "id": "2",
    "user": "keen3",
    "tags": [
      {
        'type': 'dark',
        'name': '22',
        'value': 'Kcloud',
      },
      {
        'name': '24',
        'value': 'Kcloud',
      },
    ]
  }  
];

// const solution = sample.filter((v) => {
//   // const temp = '';
//   // const ddd = v.tags.map((innerV) => {
//   //   return innerV.name.indexOf('22');
//   // });
//   // return ddd;

//   // v.tags
//   for (i = 0; i < v.tags.length; i++) {
//     if(v.tags[i].name == '22') {
//       console.log('있엉');
//       return '2'
//     }
//   }
// });

// console.log(solution);

var arr = [
  {"name":"apple", "count": 2},
  {"name":"orange", "count": 5},
  {"name":"pear", "count": 3},
  {"name":"orange", "count": 16}
];

// var newArr = arr.filter(item => {
//   return item.name === 'apple'
// });

// console.log(newArr);

// const ddd = sample.filter(item => {
//   return item.tags.value === '22'
// })

const ddd = sample.map(item => {
  
  const checking = item.tags.filter(v => {return v.type === 'dark'}).length;

  if(checking) return item;
  // return item.tags.filter(v => {return v.type === 'dark'})
  // console.log(checking);

  // return checking === [] ? '빈배열' : '아닌배열';

  
  
});

// const ddd2 = function(searchKeyoword) {
//   let temp = []
//   for ( i = 0; i < sample.length ; i++ ) {
//     const checking = sample[i].tags.filter(v => {return v.type === searchKeyoword}).length;
//     if (checking) temp.push(sample[i]);
//   }
//   return temp
// }

// console.log(ddd2('dark'));

const ddd3 = function(searchKeyoword) {
  let temp = []
  for ( i = 0; i < sample.length ; i++ ) {
    const checking = sample[i].tags.filter(v => {return v.type === searchKeyoword}).length;
    if (checking) temp.push(sample[i]);
  }
  return temp
}

console.log(ddd2('dark'));