/* const apikey="PLJgOGFP5YvXmAli95APWmnbgn3mWTP7";
const petition=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
petition.then(resp=>resp.json())
    .then(({data})=>{
        console.log(data.images.original.url);
        const image=document.getElementById('img_1');
        image.src=data.images.original.url;
    }).catch(
        console.warn
    ); */
const getImage=async()=>{
    const apikey="PLJgOGFP5YvXmAli95APWmnbgn3mWTP7";
    const resp=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    try {
        const { data }=await resp.json();
        console.log(data);
        const { url }=data.images.original;
        const img=document.getElementById('img_1');
        img.src=url;
    } catch (error) {
        console.error(error);
    }
}

getImage();
const Giphy = () => {
    return (
        <>
            <img id="img_1" alt="" />
        </>
    )
}

export default Giphy;
