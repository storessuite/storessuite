import axios from "axios";

const getQueryParam = (param: string) => {
    return new URLSearchParams(window.location.search).get(param) || "";
};

function classNames(...classes: Array<string | boolean | undefined | null>) {
    if (!classNames) return "";

    return classes.filter(Boolean).join(" ");
}

const debounce = (callback: (arg: string) => void, time: number = 1000) => {
    let timer: NodeJS.Timeout | string | number | undefined;
    return (...args: [string]) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, time);
    };
};

function objectToQueryString(obj: { [key: string]: any }): string {
    return Object.keys(obj)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
        )
        .join("&");
}

const mandatoryQueryParams = () => {
    let queryParams: { instance?: string; id_token?: string } = {};

    if (getQueryParam("instance"))
        queryParams.instance = getQueryParam("instance");

    if (getQueryParam("id_token"))
        queryParams.id_token = getQueryParam("id_token");

    return queryParams;
};

const getAppUrl = (url: string, queryParams?: any) => {
    const queryParamsString = objectToQueryString({ ...queryParams, ...mandatoryQueryParams() });
    return url + (url.includes("?") ? '&' + queryParamsString : "?" + queryParamsString);
};

const redirectTo = (url: string, queryParams?: any): void => {
    window.location.href = getAppUrl(url, queryParams);
};

const reloadPage = (): void => {
    window.location.reload();
};

const getRequest = (url: String, queryParams = {}) => {
    const urlWithPlatformRelatedQueryParams =
        url +
        "?" +
        objectToQueryString({ ...queryParams, ...mandatoryQueryParams() });
    const headers = {
        "Content-Type": "application/json",
    };
    return axios.get(urlWithPlatformRelatedQueryParams, { headers: headers });
};

const postRequest = (url: String, data = {}) => {
    const urlWithPlatformRelatedQueryParams =
        url + "?" + objectToQueryString({ ...mandatoryQueryParams() });
    const headers = {
        "Content-Type": "application/json",
    };
    return axios.post(urlWithPlatformRelatedQueryParams, data, {
        headers: headers,
    });
};

const deleteRequest = (url: String) => {
    const urlWithPlatformRelatedQueryParams =
        url + "?" + objectToQueryString({ ...mandatoryQueryParams() });
    const headers = {
        "Content-Type": "application/json",
    };
    return axios.delete(urlWithPlatformRelatedQueryParams, {
        headers: headers,
    });
};

const arraysAreEqual = (arr1: Array<any>, arr2: Array<any>) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
};

export {
    getQueryParam,
    classNames,
    debounce,
    objectToQueryString,
    getRequest,
    postRequest,
    mandatoryQueryParams,
    arraysAreEqual,
    redirectTo,
    reloadPage,
    deleteRequest,
    getAppUrl
};
