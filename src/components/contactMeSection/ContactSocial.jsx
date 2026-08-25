import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/saksham-maheshwari28/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/saksham1728" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/skshm__28/profilecard/?igsh=aWZjcThxbTBldGZh" Icon={FaInstagram} />
      <SingleContactSocial link="https://leetcode.com/u/saksham2817/" Icon={SiLeetcode} />
      <SingleContactSocial link="https://www.codechef.com/users/saksham2817" Icon={SiCodechef}/>
    </div>
  );
};

export default ContactSocial;