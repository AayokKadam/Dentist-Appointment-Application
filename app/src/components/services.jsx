


const Services = () => {

  const servicesData = [
    {
      title: "Teeth Cleaning",
      image: "/images/cleaning.jpg",
      desc: "Professional cleaning for healthy and shining teeth."
    },

    {
      title: "Dental Implant",
      image: "/images/implant.jpg",
      desc: "Advanced implant treatment with modern technology."
    },

    {
      title: "Teeth Whitening",
      image: "/images/whitening.jpg",
      desc: "Get naturally white and beautiful teeth."
    },

    {
      title: "Braces Treatment",
      image: "/images/braces.jpg",
      desc: "Straighten your teeth with quality braces."
    },

    {
      title: "Root Canal",
      image: "/images/rootcanal.jpg",
      desc: "Pain-free root canal treatment by experts."
    },

    {
      title: "Child Dental Care",
      image: "/images/child.jpg",
      desc: "Special dental care services for children."
    }
  ];

  return (

    <div className="services-container">

      <h1 className="services-title">
        OUR SERVICES
      </h1>

      <div className="services-grid">

        {servicesData.map((service, index) => (
          
          <div className="service-card" key={index}>

            <div className="image-box">
              <img src={service.image} alt={service.title} />
            </div>

            <h2>{service.title}</h2>

            <p>{service.desc}</p>

            <button>Read More</button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Services;