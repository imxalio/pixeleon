import Button from './Button';

const Form = () => {
  return (
    <form action="https://formspree.io/f/xknlojak" method="POST">
      <div className="grid grid-cols-1 gap-7 mb-7">
        <div className="grid md:grid-cols-3 gap-5 w-full">
          <input
            name="Full name"
            type="text"
            className="p-4 text-xl rounded-xl col-span-2"
            placeholder="Full name"
            required
          />
          <input
            name="Company name"
            type="text"
            className="p-4 text-xl rounded-xl col-span-2 md:col-span-1"
            placeholder="Company name (optional)"
          />
        </div>

        <input
          name="Email address"
          type="email"
          className="p-4 text-xl rounded-xl"
          placeholder="Your email address"
          required
        />
        <input
          name="Subject"
          type="text"
          className="p-4 text-xl rounded-xl"
          placeholder="Subject"
          required
        />
        <textarea
          name="Additional Information"
          type="text"
          className="p-4 text-xl rounded-xl"
          placeholder="Additional Information (optional)"
          required
        />
        <div className="flex justify-center">
          <Button customCss={'text-2xl block md:w-3/6 w-full'} type={'submit'}>
            Submit
          </Button>
        </div>
        <p className="text-base">
          You may also send us an email at contact@pixeleon.org.
        </p>
      </div>
    </form>
  );
};
export default Form;
