const regexip = (ip) => {
    return /^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/igm.test(ip);
}

export default regexip
