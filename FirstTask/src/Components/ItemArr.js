import Items from './Items.js';

function ItemArr(props){


    const itemval=[

        {
          h2: 'Lakme Kajal', 
          imgsrc: 'logo192.png', 
          desc: 'Smudge proof and waterproof lakme kajal',
        },
    
        {
          h2: 'Foundation', 
        imgsrc: 'logo192.png', 
        desc: 'Waterproof with 24hrs lasting foundation',
      },
    
    
        {
          h2: 'Face Primer', 
          imgsrc: 'logo192.png', 
          desc: 'Nyka prep-me up face primer',
        },
    
    
        {h2: 'Blush', 
        imgsrc: 'logo192.png', 
        desc: 'Pink natural blush with glitter',
      },
    
        {
          h2: 'Bronzer', 
          imgsrc: 'logo192.png', 
          desc: 'Matt finish bronzer',
        },
    
      ];

    return(
<div>

        <Items h2={itemval[0].h2} 
    imgsrc={itemval[0].imgsrc} 
    desc={itemval[0].desc}> </Items>

    <Items h2={itemval[1].h2} 
    imgsrc={itemval[1].imgsrc} 
    desc={itemval[1].desc}> </Items>

    <Items h2={itemval[2].h2} 
    imgsrc={itemval[2].imgsrc} 
    desc={itemval[2].desc}> </Items>

    <Items h2={itemval[3].h2} 
    imgsrc={itemval[3].imgsrc} 
    desc={itemval[3].desc}> </Items>

    <Items h2={itemval[4].h2} 
    imgsrc={itemval[4].imgsrc} 
    desc={itemval[4].desc}> </Items>

</div>
    );


}

export default ItemArr;