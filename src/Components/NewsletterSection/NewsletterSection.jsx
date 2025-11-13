import React from 'react';
import newsletterbg from '../../assets/newsletter.jpg'
// Inline SVG for the arrow
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

const NewsletterSection = () => {

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    alert(`Thank you for subscribing with ${email}!`);
    e.target.reset();
  };

  return (
    <section className="bg-primary/20 my-10 py-20 max-w-[1536px] px-4 mx-auto rounded">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <img 
            src={newsletterbg}
            alt="Community volunteers" 
            className="w-full h-48 object-cover rounded-none mb-8"
          />


          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-base-content text-opacity-80 max-w-2xl mx-auto mb-8">
            Welcome to our newsletter hub, where we bring you the latest
            happenings, exclusive content, and behind-the-scenes insights.
          </p>


          <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
            <div className="join w-full rounded">
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                className="input input-bordered join-item w-full rounded-l-md input-lg"
                required
              />
              <button 
                type="submit"
                className="btn btn-primary join-item rounded-r-md btn-lg"
              >
                <span>Subscribe Now</span>
                <ArrowIcon />
              </button>
            </div>
          </form>

          <p className="text-sm text-base-content text-opacity-60 mt-4">
            "Your information will never be shared with third parties, and you can
            unsubscribe from our updates at any time."
                    </p>
          

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;