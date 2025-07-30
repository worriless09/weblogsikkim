"use client"
import Giscus from "@giscus/react"; // No curly braces here!

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="youruser/sikkim-blog"
      repoId="R_kgDOxyz"
      category="General"
      categoryId="DIC_kgDOabc"
      mapping="pathname"
      reactionsEnabled="1"
      theme="preferred_color_scheme"
    />
  );
}
