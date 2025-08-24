const exampleGps = [
    {
      timestamp: '2023-07-11T13:22:42Z',
      coord_array: [
        40.3552421,
        -74.4520264,
      ],
    }, {
      timestamp: '2023-07-11T13:23:43Z',
      coord_array: [
        40.3552419,
        -74.452026,
      ],
    },
    {
      timestamp: '2023-07-11T13:24:44Z',
      coord_array: [
        40.3552423,
        -74.4520257,
      ],
    }, {
      timestamp: '2023-07-11T13:25:45Z',
      coord_array: [
        40.3552426,
        -74.4520254,
      ],
    },{
      timestamp: '2023-07-11T14:25:45Z',
      coord_array: [
        40.3552426,
        -74.4520254,
      ],
    },{
      timestamp: '2023-07-11T15:25:45Z',
      coord_array: [
        40.3552426,
        -74.4520254,
      ],
    },
    {
      timestamp: '2023-07-11T15:26:46Z',
      coord_array: [
        40.3552429,
        -74.4520251,
      ],
    },{
      timestamp: '2023-07-11T15:27:46Z',
      coord_array: [
        40.3552429,
        -74.4520251,
      ],
    },{
      timestamp: '2023-07-11T15:28:46Z',
      coord_array: [
        40.3552429,
        -74.4520251,
      ],
    },{
      timestamp: '2023-07-11T15:40:46Z',
      coord_array: [
        40.3552429,
        -74.4520251,
      ],
    },
  ];


  console.log(exampleGps)
const array=[]
  for(let i=1; i<=exampleGps.length; i++){
    if(
        exampleGps[i-1]?.coord_array[0] === exampleGps[i]?.coord_array[0]&&
        exampleGps[i-1]?.coord_array[1] === exampleGps[i]?.coord_array[1]
    ){
       array.push(exampleGps[i])
       if(exampleGps[i-1].timestamp!==exampleGps[i-2].timestamp){
        array.push(exampleGps[i-1])
       }
    }
  }

  console.log(array.length)