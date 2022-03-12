function CtaCard() {
  return (
    <section className="mt-32">
      <div className="md:px-10 2lg:px-24">
        <div className="gradient-container">
          <div className="w-full sm:w-2/3 h-2/5 sm:h-full px-2 xxsm:px-12 sm:px-7 pt-8 sm:pt-0 py-3">
            <h2 className="text-left pt-6">Join our waitlist</h2>
            <p className=" text-mande-sm">
              Mande helps ambitious professionals like you to track their impact
              & growth and boost their career & income. Receive exclusive
              updates on what we are building.
            </p>
            <button className="large-white mt-5">Get Started</button>
          </div>

          <div className="gradient-img object-fill h-98 w-800" />
          <div className="gradient-img-mob" />
        </div>
      </div>
    </section>
  );
}

export default CtaCard;
