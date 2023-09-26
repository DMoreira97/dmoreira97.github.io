import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useParams } from 'react-router-dom';

const ProjectGallery = () => {
	const params = useParams();
	const id = params['id']
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData[id].ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={project.id}
							ref={project.ref}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
