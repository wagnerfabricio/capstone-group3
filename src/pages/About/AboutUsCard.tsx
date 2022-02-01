interface AboutUsCardProps {
    image: string;
    name: string;
    duty: string;
}

const AboutUsCard = ({name, duty, image}: AboutUsCardProps) => (
    <div>
        <img src={image} alt={name}/>
        <h2>{name}</h2>
        <h4>{duty}</h4>
    </div>
)

export default AboutUsCard