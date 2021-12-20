const getPromotionData = async (PROMOTION_ID: String) => {
    let promotionData = {};
    const url = `/api/rnb/pvt/calculatorconfiguration/${PROMOTION_ID}`;

    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'x-vtex-api-appKey': 'vtexappkey-simanqa-GPTOSK',
        'x-vtex-api-appToken': 'UZYMGCVGGKUUCVYKCZTZQYLLJTCOXIADEFYBBXQJIZFMUBINSWAWUFIVOMDNZHJXKRQXXXJEJJRRTYQHKPWBIEIYWCNOUDKBPHBDKLQVMWNKORCPWVCKKIPFIRAVJVKG'
    };

    const options = {
        method: 'GET',
        headers: header
    };

    await fetch(url, options)
        .then(res => res.json())
        .then(json => promotionData = json)
        .catch(err => console.error('error:' + err));

    return promotionData;
}

export default getPromotionData;

