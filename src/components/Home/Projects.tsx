import { Project } from '@/types/Home';
import Image from 'next/image';
import Link from 'next/link';

type ProjectsProps = {
  projects : Project[];
}
const Projects = ({projects}:ProjectsProps) => {
  return (
    <article className=' space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left'>
      <h2 className='text-3xl md:text-4xl'>Projetos Recentes</h2>
      <ul className='flex flex-wrap gap-16 justify-center xl:justify-start'>
        {projects.map(({slug,name,image},index)=>(
          <Link href={`/projects/${slug}`} key={name + index}>
            <li className='text-md list-none'>
              <Image
                className='object-cover rounded-2xl h-[18.75rem] w-[18.75rem] mb-4'
                unoptimized
                src={image.url}
                alt={image.alt}
                width={300}
                height={300}
              />
              <span>{name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
};
export default Projects;