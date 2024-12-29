import { Config } from 'ziggy-js';

export type AppLinkProps = {
    target?: string;
    href: string;
    children?: any;
    className?: string;
    propsToRefresh?: Array<string>;
};

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
