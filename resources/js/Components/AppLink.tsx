import { AppLinkProps } from "@/types";
import { getAppUrl } from "@/utils";
import { Link } from "@inertiajs/react";

const AppLink = ({
    target = "_self",
    href,
    children,
    className,
    propsToRefresh = [],
}: AppLinkProps) => {
    return <Link
        target={target}
        className={className}
        href={getAppUrl(href)}
        only={propsToRefresh}
    >
        {children}
    </Link>;
};

export default AppLink;
