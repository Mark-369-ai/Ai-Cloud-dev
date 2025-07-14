const ContactSection = () => {
  return (
    <div className="mt-16 px-4 py-8 text-center text-gray-700">
      <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
      <p className="mb-1">
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-semibold">
          AI Cloud
        </span>{" "}
        – Empowering Developers with AI
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:madupallianeesh@gmail.com"
          className="text-blue-600 hover:underline"
        >
          madupallianeesh@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ContactSection;
