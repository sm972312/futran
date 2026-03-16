import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import emailjs from "emailjs-com";

type ContactFormProps = {
  isLandingPage?: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({ isLandingPage }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_1j3woul";
    const TEMPLATE_ID = "template_ib9dagd";
    const USER_ID = "vLr62yNd-tsEqtPFG";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          subject: formData.subject,
          email: formData.email,
          message: formData.message,
        },
        USER_ID
      );
      toast({
        title: "Form submitted",
        description: "Thank you for your query. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description:
          "There was an error sending your query. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4 flex flex-col md:gap-[50px]">
        <div className="flex md:items-center flex-col md:flex-row gap-[20px] md:gap-[42px]">
          <label
            htmlFor="name"
            className="font-proxima font-normal text-[20px] leading-[100%] tracking-[0.05em] text-[#414042] align-middle flex-auto w-2/12"
          >
            Name
          </label>
          <div
            className={`${
              isLandingPage
                ? "bg-gradient-to-r from-[#03C04A] to-[#00A3E0] p-[1px]"
                : "border border-[#414042]"
            } mt-4 rounded-md w-full`}
          >
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name here"
              className="font-proxima font-normal text-[20px] leading-[100%] tracking-[0.05em] rounded-md px-4 py-3 text-[#414042] placeholder:text-[#414042 ] h-[49px] focus:outline-0 focus-visible:ring-0 flex-auto"
              required
            />
          </div>
        </div>

        <div className="flex md:items-center flex-col md:flex-row gap-[20px] md:gap-[42px]">
          {" "}
          <label
            htmlFor="subject"
            className="font-proxima font-normal text-[20px] leading-[100%] tracking-[0.05em] text-[#414042] align-middle flex-auto w-2/12"
          >
            Subject
          </label>
          <div
            className={`${
              isLandingPage
                ? "bg-gradient-to-r from-[#03C04A] to-[#00A3E0] p-[1px]"
                : "border border-[#414042]"
            } mt-4 rounded-md w-full`}
          >
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Type of message"
              className="font-proxima font-normal text-[20px] leading-[100%] tracking-[0.05em] rounded-md px-4 py-3 text-[#414042] placeholder:text-[#414042 ] h-[49px] focus:outline-0 focus-visible:ring-0 flex-auto "
              required
            />
          </div>
        </div>

        <div className="flex md:items-center flex-col md:flex-row gap-[20px] md:gap-[42px]">
          <label
            htmlFor="email"
            className="font-proxima font-normal text-[20px] leading-[100%] tracking-[0.05em] text-[#414042] align-middle flex-auto md:w-2/12"
          >
            E-mail
          </label>
          <div
            className={`${
              isLandingPage
                ? "bg-gradient-to-r from-[#03C04A] to-[#00A3E0] p-[1px]"
                : "border border-[#414042]"
            } rounded-md w-full`}
          >
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="font-proxima font-normal text-[20px] leading-[100%] tracking-[0.05em] rounded-md px-4 py-3 text-[#414042] placeholder:text-[#414042 ] h-[49px] focus:outline-0 focus-visible:ring-0 flex-auto "
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="font-proxima font-normal text-[20px] leading-[100%] tracking-[0.05em] text-[#414042] align-middle"
          >
            Your message
          </label>
          <div
            className={`${
              isLandingPage
                ? "bg-gradient-to-r from-[#03C04A] to-[#00A3E0] p-[1px]"
                : "border border-[#414042]"
            } mt-4 rounded-md w-full`}
          >
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter message here"
              className="font-proxima font-normal text-[20px] leading-[100%] tracking-[0.05em] bg-white rounded-md px-4 py-3 text-[#414042] placeholder:text-[#414042] h-[49px] min-h-[160px] w-full border-none focus:outline-none focus:ring-0"
              required
            />
          </div>
        </div>
      </div>

      <div className={!isLandingPage && "text-center"}>
        <PrimaryButton
          type="submit"
          className="w-full justify-center xl:max-w-[416px] border border-[#dbdbdb] md:max-w-auto text-[20px] text-[#1C3562]"
          size="lg"
          variant="outline"
          arrow={false}
          disabled={isSubmitting}
          isSubmit={true}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ContactForm;
