const CharactersCard = ({ image, name, country, url, handleUrl }) => {

    return (
        <div className="text-white grid grid-rows-[auto_auto] border-4 border-green-apple rounded-2xl w-full overflow-hidden place-items-center">
            <div className="bg-black/70 border-b-2 border-green-apple h-[200px] relative">
                <a href={url} onClick={handleUrl}>
                    <img className="hover:scale-110 transition-transform w-4/5 -mt-2 mx-auto min-[380px]:w-4/6" src={image} alt="" />
                </a>
                <div className="flex justify-center items-center gap-2 absolute p-1 px-2 bottom-0">
                    <div className="h-3 aspect-square bg-green-apple rounded-full animate-pulse"></div>
                    <h5 className="">Alive</h5>
                </div>
                <p className="absolute right-0 -mt-[3px]">Click on Avatar</p>
            </div>
            <article className="bg-black/70 w-full p-2 py-4 flex flex-col items-center gap-4">
                <h2>{name}</h2>
                <p>{country}</p>
                <h4>Skills:</h4>
                <div className="flex border border-white h-10 items-center justify-around divide-x-2 gap-1 rounded-full py-4 p-2">
                    <i className='bx bxl-html5 text-3xl pl-1'></i>
                    <i className='bx bxl-css3 text-3xl pl-1' ></i>
                    <i className='bx bxl-javascript text-3xl pl-1' ></i>
                    <i className='bx bxl-tailwind-css text-3xl pl-1' ></i>
                    <i className='bx bxl-react text-3xl px-1' ></i>
                </div>
            </article>
        </div>
    )
}
export default CharactersCard