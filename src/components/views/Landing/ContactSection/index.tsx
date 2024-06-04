import Link from "next/link";

export default function ContactSection(props: { contactRef: any }) {
  const { contactRef } = props;

  return (
    <section id="contact" className="py-12" ref={contactRef}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="mb-4">
          Have questions? Wed love to hear from you! Reach out to us through any
          of the following methods:
        </p>
        <ul className="list-none">
          <li>
            Email:{" "}
            <a
              href="mailto:mardif45@gmail.com"
              className="text-blue-500 hover:underline"
            >
              mardif45@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2 justify-center">
            Phone:{" "}
            <Link
              href="http://wa.me/082113325302"
              className="text-blue-500 hover:underline"
            >
              <i className="bx bxl-whatsapp text-2xl" /> 082113325302
            </Link>
          </li>
          <li>
            Address: Desa Sindangpakuon Kec Cimanggung Kab Sumedang Jawa Barat
          </li>
        </ul>
      </div>
    </section>
  );
}
