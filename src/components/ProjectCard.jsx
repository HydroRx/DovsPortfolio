const ProjectCard = ({ card }) => {
  return (
    <div className='drop-shadow-md overflow-hidden rounded-3xl mr-4 my-4 transform transition-transform hover:scale-105'>
        <img src={card.linkImg} className='h-80 w-full object-cover' />

        <div className='p-5'>
            <h1 className='py-2 text-gradient font-bold text-center'>{card.title}</h1>
        </div>
    </div>
  );
};

export default ProjectCard;
