import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";
import { Callout } from "@/components/mdx/Callout";

function isExternal(href?: string) {
  return Boolean(href && /^https?:\/\//.test(href));
}

function MdxLink({ href, children, ...props }: ComponentPropsWithoutRef<"a">) {
  if (isExternal(href)) {
    return (
      <a href={href} rel="noreferrer" target="_blank" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

function MdxTable(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="table-scroll">
      <table {...props} />
    </div>
  );
}

export const MDXComponents: MDXRemoteProps["components"] = {
  a: MdxLink,
  table: MdxTable,
  Callout,
};
