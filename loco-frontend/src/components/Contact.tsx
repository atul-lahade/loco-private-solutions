import contactImg from "../assets/images/contact.png";
import indFlag from "../assets/images/india-flag.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const { t } = useTranslation(["home"]);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    var message = `Hello! I am ${formData.fullName} (${formData.email}). ${formData.message}`;
    let url = `https://api.whatsapp.com/send/?phone=919890533525`;
    url += `&text=${encodeURI(message)}&app_absent=0`;
    window.open(url);
  }

  return (
    <section className="max-w-7xl mx-auto px-16 mt-16">
      <div className="text-center my-10 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-[#799AA3]">
          {t("contact.heading")}
        </h1>
        <div className="mt-4 flex justify-center">
          <hr
            aria-hidden="true"
            role="separator"
            className="border-t-2 border-gray-300 w-1/3 md:w-1/6"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="lg:ml-8">
          <h2 className="text-4xl font-semibold text-[#799AA3] mb-4">
            {t("contact.sub_heading")}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-md">
            {t("contact.sub_desc")}
          </p>
          <a
            href="https://wa.me/+919890533525"
            target="_blank"
            className="inline-flex items-center px-4 py-2 bg-[#455A64] text-white font-medium rounded hover:bg-[#3a5662] focus:outline-none"
          >
            <svg
              className="transition-all duration-300 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 71 72"
              fill="none"
            >
              <path
                d="M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z"
                fill="#00D95F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z"
                fill="#00D95F"
              />
            </svg>
            {t("buttons.whatsapp_connect")}
          </a>

          <div className="mt-8  leading-relaxed tracking-wide">
            <h3 className="font-semibold text-lg text-[#799AA3]">
              Loco Private Solutions
            </h3>
            <span className="text-black flex items-center">
              Govind Nagar, Nashik, Maharashtra,{" "}
              <img
                className="h-4 w-4 ml-1 mr-1"
                src={indFlag}
                alt="India Flag"
              />{" "}
              India
            </span>
            <a className="text-black" href="tel:+919890533525">
              +91 9890533525
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:mr-8">
          <img
            src={contactImg}
            alt="Global Exports and Logistics"
            className="rounded-lg shadow-2xl w-full transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </div>
      <div className="w-full text-black">
        <div className="container flex flex-col items-center gap-4 mx-auto my-16">
          <div className="grid items-center grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col w-10/12 gap-2 text-center mx-auto md:text-start md:ml-0">
                <h3 className="text-4xl font-bold text-[#799AA3] font-display">
                  {t("contact.contact_us")}
                </h3>
                <p className="text-base font-medium leading-7 text-gray-600">
                  {t("contact.contact_us_desc")}
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-24">
                <div className="flex flex-col items-center gap-3 text-center md:text-start md:items-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M20.21 9.17135L14 3.13135C13.474 2.6312 12.7759 2.3523 12.05 2.3523C11.3241 2.3523 10.626 2.6312 10.1 3.13135L3.89 9.13135C3.61408 9.37221 3.39216 9.66866 3.23879 10.0013C3.08541 10.3339 3.00404 10.6951 3 11.0613V19.6413C3.01054 20.369 3.30904 21.0627 3.83012 21.5707C4.35119 22.0786 5.05235 22.3594 5.78 22.3513H18.22C18.9476 22.3594 19.6488 22.0786 20.1699 21.5707C20.691 21.0627 20.9895 20.369 21 19.6413V11.0613C20.9992 10.7098 20.929 10.3619 20.7935 10.0376C20.6579 9.71324 20.4596 9.41887 20.21 9.17135ZM11.44 4.57135C11.593 4.43151 11.7927 4.35397 12 4.35397C12.2073 4.35397 12.407 4.43151 12.56 4.57135L18 9.85135L12.53 15.1313C12.377 15.2712 12.1773 15.3487 11.97 15.3487C11.7627 15.3487 11.563 15.2712 11.41 15.1313L6 9.85135L11.44 4.57135ZM19 19.6413C18.9871 19.8376 18.8987 20.0213 18.7532 20.1537C18.6078 20.2861 18.4166 20.3569 18.22 20.3513H5.78C5.58338 20.3569 5.39225 20.2861 5.24678 20.1537C5.10132 20.0213 5.01286 19.8376 5 19.6413V11.7014L9.05 15.6013L7.39 17.2014C7.20375 17.3887 7.09921 17.6422 7.09921 17.9064C7.09921 18.1705 7.20375 18.424 7.39 18.6113C7.48295 18.7089 7.59463 18.7866 7.71836 18.8398C7.84208 18.8931 7.9753 18.9208 8.11 18.9213C8.36747 18.9203 8.61462 18.82 8.8 18.6413L10.57 16.9413C11.0096 17.21 11.5148 17.3521 12.03 17.3521C12.5452 17.3521 13.0504 17.21 13.49 16.9413L15.26 18.6413C15.4454 18.82 15.6925 18.9203 15.95 18.9213C16.0847 18.9208 16.2179 18.8931 16.3416 18.8398C16.4654 18.7866 16.5771 18.7089 16.67 18.6113C16.8563 18.424 16.9608 18.1705 16.9608 17.9064C16.9608 17.6422 16.8563 17.3887 16.67 17.2014L15 15.6013L19 11.7014V19.6413Z"
                        fill="#1B2559"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold text-[#799AA3] font-display">
                    {t("contact.email")}
                  </h3>
                  <a
                    className="text-lg font-bold text-gray-600 break-words"
                    href="mailto:locoprivatesolutions@gmail.com"
                  >
                    locoprivatesolutions@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3 text-center md:text-start md:items-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M19.41 13.7027C19.1901 13.7027 18.96 13.6308 18.74 13.5795C18.2949 13.4772 17.8572 13.3434 17.43 13.1789C16.9661 13.0056 16.4562 13.0146 15.9984 13.2042C15.5405 13.3938 15.1671 13.7506 14.95 14.2059L14.73 14.6784C13.7589 14.1127 12.8617 13.4225 12.0601 12.6243C11.2829 11.801 10.6108 10.8796 10.0601 9.88216L10.5201 9.66648C10.9634 9.44353 11.3108 9.06006 11.4954 8.58984C11.6801 8.11963 11.6888 7.59591 11.5201 7.11946C11.3612 6.67684 11.231 6.22397 11.13 5.76378C11.08 5.53784 11.04 5.30162 11.01 5.07567C10.8886 4.35226 10.5197 3.69714 9.96967 3.2283C9.41967 2.75946 8.72475 2.5077 8.01005 2.51838H5.00005C4.5773 2.51781 4.1592 2.60901 3.77317 2.786C3.38714 2.963 3.04189 3.22178 2.76005 3.5454C2.47237 3.8778 2.25817 4.27023 2.13215 4.69571C2.00614 5.12119 1.97131 5.56965 2.03005 6.01027C2.57364 10.2849 4.47526 14.2559 7.44005 17.3076C10.4114 20.3525 14.2779 22.3055 18.4401 22.8638C18.5699 22.874 18.7002 22.874 18.83 22.8638C19.5675 22.8649 20.2794 22.587 20.83 22.0832C21.1452 21.7938 21.3971 21.4392 21.5695 21.0427C21.7418 20.6463 21.8306 20.2169 21.83 19.7827V16.7016C21.8247 15.992 21.5809 15.306 21.14 14.7596C20.6991 14.2132 20.088 13.8399 19.41 13.7027ZM19.9 19.8649C19.8997 20.0082 19.8702 20.1498 19.8134 20.2807C19.7565 20.4116 19.6736 20.5288 19.57 20.6249C19.4604 20.7274 19.33 20.8037 19.1882 20.8481C19.0464 20.8925 18.8967 20.9039 18.75 20.8816C15.0183 20.3811 11.5503 18.6345 8.88005 15.9108C6.20752 13.166 4.49208 9.59189 4.00005 5.74324C3.97833 5.59261 3.98949 5.43891 4.03272 5.29325C4.07596 5.1476 4.1502 5.01364 4.25005 4.90108C4.34467 4.7934 4.46043 4.70752 4.5897 4.6491C4.71897 4.59069 4.85882 4.56106 5.00005 4.56216H8.00005C8.23121 4.55636 8.45719 4.63301 8.63951 4.77907C8.82184 4.92513 8.94925 5.13156 9.00005 5.36324C9.00005 5.64054 9.09005 5.92811 9.15005 6.2054C9.26563 6.74342 9.41937 7.27204 9.61005 7.78702L8.21005 8.46486C7.96941 8.57831 7.78241 8.78514 7.69005 9.04C7.59003 9.29004 7.59003 9.5705 7.69005 9.82054C9.12925 12.9866 11.6073 15.5316 14.69 17.0097C14.9335 17.1124 15.2066 17.1124 15.45 17.0097C15.6982 16.9149 15.8996 16.7228 16.01 16.4757L16.64 15.0378C17.156 15.231 17.6838 15.3889 18.22 15.5103C18.48 15.5719 18.76 15.6232 19.0301 15.6643C19.2556 15.7165 19.4566 15.8473 19.5989 16.0346C19.7411 16.2219 19.8157 16.4539 19.81 16.6913L19.9 19.8649ZM14 2.4054C13.7701 2.4054 13.53 2.4054 13.3 2.4054C13.0348 2.42856 12.7894 2.55896 12.6178 2.76794C12.4462 2.97692 12.3625 3.24734 12.385 3.51973C12.4076 3.79211 12.5346 4.04414 12.738 4.22038C12.9415 4.39661 13.2048 4.48261 13.47 4.45946H14C15.5913 4.45946 17.1175 5.10868 18.2427 6.26431C19.3679 7.41994 20 8.98731 20 10.6216C20 10.8065 20 10.9811 20 11.1659C19.9779 11.4369 20.0612 11.7058 20.2318 11.9137C20.4024 12.1216 20.6463 12.2516 20.91 12.2751H20.99C21.2404 12.2762 21.482 12.1807 21.6671 12.0077C21.8523 11.8347 21.9675 11.5966 21.99 11.3405C21.99 11.1043 21.99 10.8578 21.99 10.6216C21.9901 8.44432 21.1486 6.35605 19.6504 4.81551C18.1523 3.27496 16.12 2.40812 14 2.4054ZM16 10.6216C16 10.894 16.1054 11.1552 16.2929 11.3478C16.4805 11.5404 16.7348 11.6486 17 11.6486C17.2653 11.6486 17.5196 11.5404 17.7072 11.3478C17.8947 11.1552 18 10.894 18 10.6216C18 9.53208 17.5786 8.48717 16.8285 7.71675C16.0783 6.94633 15.0609 6.51351 14 6.51351C13.7348 6.51351 13.4805 6.62172 13.2929 6.81432C13.1054 7.00693 13 7.26815 13 7.54054C13 7.81292 13.1054 8.07415 13.2929 8.26676C13.4805 8.45936 13.7348 8.56756 14 8.56756C14.5305 8.56756 15.0392 8.78397 15.4143 9.16918C15.7893 9.55439 16 10.0769 16 10.6216Z"
                        fill="#1B2559"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold text-[#799AA3] font-display">
                    {t("contact.phone")}
                  </h3>
                  <a
                    className="text-lg font-bold text-gray-600"
                    href="tel:+919890533525"
                  >
                    +91 9890533525
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3 text-center md:text-start md:items-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M20.46 9.89026C20.3196 8.38969 19.8032 6.95202 18.9612 5.71727C18.1191 4.48251 16.9801 3.49274 15.655 2.84434C14.3299 2.19594 12.8639 1.911 11.3997 2.01728C9.93555 2.12356 8.52314 2.61743 7.3 3.45081C6.2492 4.17244 5.36706 5.12414 4.71695 6.23753C4.06684 7.35092 3.6649 8.59837 3.54 9.89026C3.41749 11.1737 3.57468 12.469 4.00017 13.6823C4.42567 14.8956 5.1088 15.9964 6 16.9049L11.3 22.3584C11.393 22.4546 11.5036 22.531 11.6254 22.5832C11.7473 22.6353 11.878 22.6622 12.01 22.6622C12.142 22.6622 12.2727 22.6353 12.3946 22.5832C12.5164 22.531 12.627 22.4546 12.72 22.3584L18 16.9049C18.8912 15.9964 19.5743 14.8956 19.9998 13.6823C20.4253 12.469 20.5825 11.1737 20.46 9.89026ZM16.6 15.4568L12 20.1811L7.4 15.4568C6.72209 14.7605 6.20281 13.9186 5.87947 12.9916C5.55614 12.0647 5.43679 11.0757 5.53 10.0957C5.62382 9.10059 5.93177 8.13935 6.43157 7.28145C6.93138 6.42356 7.61056 5.69045 8.42 5.13513C9.48095 4.41132 10.7263 4.02522 12 4.02522C13.2737 4.02522 14.5191 4.41132 15.58 5.13513C16.387 5.6883 17.0647 6.41817 17.5644 7.27231C18.064 8.12644 18.3733 9.08364 18.47 10.0751C18.5663 11.0584 18.4484 12.0514 18.125 12.9822C17.8016 13.9129 17.2807 14.7582 16.6 15.4568ZM12 6.16216C11.11 6.16216 10.24 6.43321 9.49994 6.94104C8.75992 7.44887 8.18314 8.17067 7.84255 9.01516C7.50195 9.85965 7.41284 10.7889 7.58647 11.6854C7.7601 12.5819 8.18869 13.4054 8.81802 14.0518C9.44736 14.6981 10.2492 15.1383 11.1221 15.3166C11.995 15.4949 12.8998 15.4034 13.7221 15.0536C14.5443 14.7038 15.2471 14.1114 15.7416 13.3514C16.2361 12.5914 16.5 11.6978 16.5 10.7838C16.4974 9.55888 16.0224 8.38493 15.1791 7.51879C14.3357 6.65266 13.1927 6.16487 12 6.16216ZM12 13.3513C11.5055 13.3513 11.0222 13.2008 10.6111 12.9186C10.2 12.6365 9.87952 12.2355 9.6903 11.7663C9.50109 11.2972 9.45158 10.7809 9.54804 10.2829C9.6445 9.78481 9.88261 9.32731 10.2322 8.96823C10.5819 8.60915 11.0273 8.36462 11.5123 8.26555C11.9972 8.16648 12.4999 8.21732 12.9567 8.41165C13.4135 8.60599 13.804 8.93508 14.0787 9.35731C14.3534 9.77955 14.5 10.276 14.5 10.7838C14.5 11.4647 14.2366 12.1178 13.7678 12.5993C13.2989 13.0808 12.663 13.3513 12 13.3513Z"
                        fill="#1B2559"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold text-[#799AA3] font-display">
                    {t("contact.location")}
                  </h3>
                  <a
                    className="text-lg font-bold text-gray-600"
                    target="_blank"
                    href="https://maps.app.goo.gl/jrTyFCnnnYuM4BCq9"
                  >
                    Nashik, MH, India 422009
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3 text-center md:text-start md:items-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M11 2.05405C9.02219 2.05405 7.08879 2.65639 5.4443 3.7849C3.79981 4.91341 2.51809 6.51741 1.76121 8.39405C1.00433 10.2707 0.806299 12.3357 1.19215 14.3279C1.578 16.3202 2.53041 18.1502 3.92894 19.5865C5.32746 21.0228 7.10929 22.001 9.0491 22.3972C10.9889 22.7935 12.9996 22.5901 14.8268 21.8128C16.6541 21.0355 18.2159 19.7191 19.3147 18.0302C20.4135 16.3412 21 14.3556 21 12.3243C21 10.9756 20.7413 9.6401 20.2388 8.39405C19.7363 7.14801 18.9997 6.01582 18.0711 5.06214C17.1425 4.10846 16.0401 3.35195 14.8268 2.83582C13.6136 2.3197 12.3132 2.05405 11 2.05405ZM11 20.5405C9.41775 20.5405 7.87104 20.0587 6.55544 19.1558C5.23985 18.253 4.21447 16.9698 3.60897 15.4685C3.00347 13.9672 2.84504 12.3152 3.15372 10.7214C3.4624 9.12762 4.22433 7.66363 5.34315 6.51457C6.46197 5.36552 7.88743 4.583 9.43928 4.26597C10.9911 3.94895 12.5997 4.11166 14.0615 4.73352C15.5233 5.35539 16.7727 6.40848 17.6518 7.75963C18.5308 9.11078 19 10.6993 19 12.3243C19 14.5034 18.1572 16.5932 16.6569 18.1341C15.1566 19.6749 13.1217 20.5405 11 20.5405ZM14.1 12.9713L12 11.7286V7.18918C12 6.9168 11.8946 6.65557 11.7071 6.46296C11.5196 6.27036 11.2652 6.16215 11 6.16215C10.7348 6.16215 10.4804 6.27036 10.2929 6.46296C10.1054 6.65557 10 6.9168 10 7.18918V12.3243C10 12.3243 10 12.4065 10 12.4476C10.0059 12.5183 10.0228 12.5877 10.05 12.653C10.0706 12.7139 10.0974 12.7724 10.13 12.8276C10.1574 12.8859 10.1909 12.941 10.23 12.9919L10.39 13.1254L10.48 13.2178L13.08 14.7584C13.2324 14.8471 13.4048 14.8931 13.58 14.8919C13.8014 14.8935 14.0171 14.8195 14.1932 14.6817C14.3693 14.5438 14.4959 14.3499 14.5531 14.1302C14.6103 13.9105 14.5948 13.6775 14.5092 13.4678C14.4236 13.2581 14.2726 13.0835 14.08 12.9713H14.1Z"
                        fill="#1B2559"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold text-[#799AA3] font-display">
                    {t("contact.hrs")}
                  </h3>
                  <a
                    className="text-lg font-bold text-gray-600"
                    target="_blank"
                  >
                    09:00 AM-06:00 PM
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-6 bg-white rounded-3xl shadow-main md:p-10">
              <h3 className="text-4xl font-bold text-dark-grey-900 font-display  text-[#799AA3] font-display">
                {t("contact.form.heading")}
              </h3>
              <div className="flex flex-col gap-6">
                <label className="flex flex-col gap-2 text-sm font-medium text-dark-grey-600">
                  {t("contact.form.name")}
                  <input
                    className="p-4 border border-solid outline-none rounded-xl placeholder:text-sm placeholder:font-medium placeholder:text-dark-grey-500 border-grey-300 focus:border-grey-600 focus:ring-2 focus:ring-grey-600 bg-white shadow-md"
                    placeholder={t("contact.form.name_placeholder")}
                    type="text"
                    id="full-name"
                    name="fullName"
                    onChange={handleInputChange}
                    defaultValue={formData.fullName}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-dark-grey-600">
                  {t("contact.form.email")}
                  <input
                    className="p-4 border border-solid outline-none rounded-xl placeholder:text-sm placeholder:font-medium placeholder:text-dark-grey-500 border-grey-300 focus:border-grey-600 focus:ring-2 focus:ring-grey-600 bg-white shadow-md"
                    placeholder={t("contact.form.email_placeholder")}
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    defaultValue={formData.email}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-dark-grey-600">
                  {t("contact.form.message")}
                  <textarea
                    className="p-4 border border-solid outline-none rounded-xl placeholder:text-sm placeholder:font-medium placeholder:text-dark-grey-500 border-grey-300 focus:border-grey-600 focus:ring-2 focus:ring-grey-600 bg-white shadow-md"
                    placeholder={t("contact.form.message_placeholder")}
                    id="message"
                    name="message"
                    onChange={handleInputChange}
                    defaultValue={formData.message}
                    required
                  ></textarea>
                </label>
                <button
                  type="button"
                  className="flex items-center justify-center py-4 text-center text-white px-7 rounded-2xl bg-[#6a838f] hover:bg-[#3a5662] focus:ring-4 focus:ring-purple-blue-100 transition duration-300"
                  onClick={handleSubmit}
                >
                  {t("buttons.submit_meg")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
