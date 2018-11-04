var Name = "Satria Ramadanol"
var Old  = 18
var Ras = "asia"
 // Nama saya Satria Ramadanol, dan
 // saya berusia 18 tahun dan saya Ras Asia dengan cara sbb;

 console.log('Nama saya ' + Name  + ' dan saya berusia tahun ' + Old + ' dan saya Ras ' + Ras)
 console.log(6*6)
 console.log(8-4)
 console.log(2+3)
 console.log(8/4)
 console.log(5%2)

//di dalam array hiungan dari nol

 var lokers =['Danol','Rizky','Rizki','Andika','Gia','Mustafa','Arif']

 console.log(lokers[3])

//cara mengambil data array tidak diketahui dengan cara 

console.log(lokers[ lokers.length - 1 ])

// jika hari hujan saya honda jazz
//jika hari hujan saya membeli jas hujan

var hari = 'hujan'

 if (hari ==='hujan' ){
     console.log('saya membeli jazz Hujan')
 }else{
     console.log('saya membeli honda jazz')
 }
 
 var uang = 100000 
 var umur = 18

  
  if ( umur < 18 ){
      console.log('disuruh pulang')
  }else if(uang === 50000){
      console.log('beli satu botol')
  }else if(uang === 100000){
      console.log('beli 2 botol')
  }else if (uang < 50000){
      console.log('sory boy anda kere')
  }

  //perulangan

  for (var i =0;  i < lokers.length; i = i + 1 )
   console.log(lokers [i] )

var students = [
    {
        name:'danol',
        address:'tabek panjang'
    },
        {
        name:'rizky a',
        address:'kubang'
    },
        {
        name:'rizki f',
        address:'limbanang'
    }
]
console.log(students [0].name)
  for (var i = 0; i < students.length; i = i + 1){
      console.log('Nama :',students[i].name)
      console.log('Alamat :',students[i].address)
  }

  var students = [
      {
          nis:'170700803',
          name:'Satria Ramadanol',
          avatar:'pkk/foto1.jpg'
      },
            {
          nis:'170700801',
          name:'Rizky Ananda',
          avatar:'--'
      },
            {
          nis:'170700800',
          name:'Rizky Fauzan',
          avatar:'--'
      },
      {
          nis:'170700786',
          name:'Gia',
          avatar:'--'
      },
      {
          nis:'170700922',
          name:'Muhammad Andika',
          avatar:'--'
      },
      {
          nis:'170700788',
          name:'Khairul Mustafa',
          avatar:'--'
      },
      {
          nis:'170700818',
          name:'Haminzan Rafiqi azuris',
          avatar:'--'
      },
      {
          nis:'170700790',
          name:'Revan Apriandi',
          avatar:'--'
      },
      {
          nis:'170700781',
          name:'Arif Habibi',
          avatar:'--'
      },
      {
          nis:'170700791',
          name:'Rehan septio',
          avatar:'--'
      },
            {
          nis:'170700808',
          name:'Yogie lailatul Igbal',
          avatar:'--'
      },
     {
          nis:'170700799',
          name:'Muhammad Lufti',
          avatar:'--'
      },
     {
          nis:'170700713',
          name:'Muhammad Fuadi',
          avatar:'--'
      },
            {
          nis:'170700781',
          name:'Arif Habibi',
          avatar:'--'
      },
            {
          nis:'170700714',
          name:'Al Azim',
          avatar:'--'
      },
      {
          nis:'170700757',
          name:'Muhammad Ridwan',
          avatar:'--'
      },
     {
          nis:'170700806',
          name:'Syukriatul Zandri',
          avatar:'--'
      },
     {
          nis:'170700834',
          name:'Qolbiatul Adrien',
          avatar:'--'
      },
     {
          nis:'170700838',
          name:'Wendi Hermawan',
          avatar:'--'
      },
            {
          nis:'170700823',
          name:'Muhammad Farid',
          avatar:'--'
      },
            {
          nis:'170700792',
          name:'Muhammad Akdanul Waffy',
          avatar:'--'
      }
  ]

    //ini untuk proses pencarian data,
    //ketika tombol di tekan

    function cari() {
     var ketik = document.getElementById('search').value
  for(var i = 0; i <students.length; i = i+1){
      if (students[i].nis ==ketik){
       document.getElementById('tampil').textContent = students[i].name
       document.getElementById('gambar').setAttribute("src",students[i].avatar)
     }
    }
   }