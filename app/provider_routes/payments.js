var provider_payments = require('../provider_controllers/payments');
module.exports = function (app) {

    app.route('/provider_payments').get(provider_payments.provider_payments);
    app.route('/provider_card_type').post(provider_payments.card_type);
    app.route('/provider_add_card').post(provider_payments.add_card);
    app.route('/delete_provider_card').post(provider_payments.delete_card);
    app.route('/provider_card_selection').post(provider_payments.card_selection);
    app.route('/check_card').post(provider_payments.check_card);

    app.route('/provider_add_wallet_amount').get(provider_payments.provider_add_wallet_amount);
    app.route('/request_zaincash_payment').post(provider_payments.request_zaincash_payment);

};