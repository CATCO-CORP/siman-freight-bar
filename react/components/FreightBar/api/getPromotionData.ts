const getPromotionData = async (PROMOTION_ID: String) => {
    let promotionData = {};
    const url = `/api/rnb/pvt/calculatorconfiguration/${PROMOTION_ID}`;
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
    };

    await fetch(url, options)
        .then(res => res.json())
        .then(json => promotionData = json)
        .catch(err => console.error('error:' + err));

    console.log("promotionData ", promotionData);

    return promotionData;
}

export default getPromotionData;

