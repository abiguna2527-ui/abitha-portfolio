import websiteImg1 from '../assets/ecommerce-website.jpg';
import websiteImg2 from '../assets/food-ecommerce-website.jpg';
import websiteImg3 from '../assets/website-blog.jpg';


export default function projects() {
    const config ={
        projects :[
            {
                image: websiteImg1,
                description: 'A Ecommerce website.Built with MERN stack.',
                link: 'https://github.com/abicode',
                
            },
            {
            image: websiteImg2,
               description: 'Food Ecommerce website like swiggy,Built with Angular &.Net.',
               link: 'https://github.com/abicode/food',
                
           },
            {
                image: websiteImg3,
                description: 'Basic Blog website.Built with Next JS and MongoDB.',
                link: 'https://github.com/abicode/blog',
                
            },
    
        ],
    }
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex  flex-col px-10 py-5">
                <h1 className='text-4xl  border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
           <p>These are some of my best projects.I have built these with React.MERN and vanilla CSS.check theme out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className=' flex flex-col md:flex-row px-10 gap-5'>
               {config.projects.map((projects) => (
                
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={projects.image}/>
                    <div className='project-desc'>
                    
                        <p className='text-center px-5 py-5'>{projects.description}</p>

                     
                    
                    <div className='flex justify-center'>
                    <a className='btn' target='_blank' href={projects.link}>view project</a>
                    </div>
            </div> 
        </div>
            
                ))}
             </div>
                </div>
                
            </section>
    
}