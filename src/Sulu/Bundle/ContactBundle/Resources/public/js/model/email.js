/*
 * This file is part of the Sulu CMS.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

define([
    'mvc/relationalmodel',
    'mvc/hasone',
    'sulucontact/model/emailType'
], function(RelationalModel, HasOne, EmailType) {
    return RelationalModel({
        urlRoot: '/admin/api/contact/emails',
        defaults: {
            id: null,
            email: '',
            emailType: null
        }, relations: [
            {
                type: HasOne,
                key: 'emailType',
                relatedModel: EmailType
            }
        ]
    });
});
