interface TitleCardsProps{
  title:string
}

 const  TitleCards:React.FC<TitleCardsProps>=({title})=> {
  

  return <div className="font-bold w-full ">
    {title}
     </div>;
}

export default TitleCards;
