
exports.forgotPassword = (subject, resp) => {
    let template = `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${subject}</title>

        <style type="text/css">

            p {
                margin: 10px 0;
                padding: 0;
            }

            table {
                border-collapse: collapse;
            }

            h1, h2, h3 {
                display: block;
                margin: 0;
                padding: 0;
            }

            img, a img {
                border: 0;
                height: auto;
                outline: none;
                text-decoration: none;
            }

            body, #bodyTable, #bodyCell {
                height: 100%;
                margin: 0;
                padding: 0;
                width: 100%;
            }

            .mcnPreviewText {
                display: none !important;
            }

            #outlook a {
                padding: 0;
            }

            img {
                -ms-interpolation-mode: bicubic;
            }

            table {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }

            .ReadMsgBody {
                width: 100%;
            }

            .ExternalClass {
                width: 100%;
            }

            p, a, li, td, blockquote {
                mso-line-height-rule: exactly;
            }

                a[href^=tel], a[href^=sms] {
                    color: inherit;
                    cursor: default;
                    text-decoration: none;
                }

            p, a, li, td, body, table, blockquote {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }

            .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font {
                line-height: 100%;
            }

            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }

            .templateContainer {
                max-width: 600px !important;
            }

            a.mcnButton {
                display: block;
            }

            .mcnImage, .mcnRetinaImage {
                vertical-align: bottom;
            }

            .mcnTextContent {
                word-break: break-word;
            }

                .mcnTextContent img {
                    height: auto !important;
                }

            .mcnDividerBlock {
                table-layout: fixed !important;
            }
            
            h1 {
                color: #222222;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 24px;
                font-style: normal;
                font-weight: bold;
                line-height: 150%;
                letter-spacing: normal;
                text-align: left;
            }
            
            h2 {
                color: #222222;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 28px;
                font-style: normal;
                font-weight: bold;
                line-height: 150%;
                letter-spacing: normal;
                text-align: left;
            }
       
            h3 {
                color: #444444;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 22px;
                font-style: normal;
                font-weight: bold;
                line-height: 150%;
                letter-spacing: normal;
                text-align: left;
            }
            
            #templateHeader {
                background-color: #f4f4f4;
                background-image: none;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-top: 0;
                border-bottom: 0;
                padding-top: 0px;
                padding-bottom: 0px;
            }
            
            .headerContainer {
                background-color: #00abcd;
                background-image: none;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-top: 0;
                border-bottom: 0;
                padding-top: 26px;
                padding-bottom: 26px;
            }
           
			.headerContainer .mcnTextContent, .headerContainer .mcnTextContent p {
				color: #757575;
				font-family: Helvetica;
				font-size: 16px;
				line-height: 150%;
				text-align: left;
			}
            
			.headerContainer .mcnTextContent a, .headerContainer .mcnTextContent p a {
                        color: #007C89;
                        font-weight: normal;
                        text-decoration: underline;
                    }
            
            #templateBody {
                background-color: #f4f4f4;
                background-image: none;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-top: 0;
                border-bottom: 0;
                padding-top: 0px;
                padding-bottom: 0px;
            }
           
            .bodyContainer {
                background-color: #ffffff;
                background-image: none;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-top: 0;
                border-bottom: 0;
                padding-top: 27px;
                padding-bottom: 63px;
            }
            
			.bodyContainer .mcnTextContent, .bodyContainer .mcnTextContent p {
				color: #333333;
				font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
				font-size: 12px;
				line-height: 150%;
				text-align: left;
			}
                    
			.bodyContainer .mcnTextContent a, .bodyContainer .mcnTextContent p a {
				color: #00abcd;
				font-weight: normal;
				text-decoration: underline;
			}
            
            #templateFooter {
                background-color: #f4f4f4;
                background-image: none;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-top: 0;
                border-bottom: 0;
                padding-top: 0px;
                padding-bottom: 0px;
            }
            
			.footerContainer {
				background-color: #333333;
				background-image: none;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				border-top: 0;
				border-bottom: 0;
				padding-top: 45px;
				padding-bottom: 63px;
			}

            .footerContainer .mcnTextContent, .footerContainer .mcnTextContent p {
                color: #FFFFFF;
                font-family: Helvetica;
                font-size: 12px;
                line-height: 150%;
                text-align: center;
            }
            
            .footerContainer .mcnTextContent a, .footerContainer .mcnTextContent p a {
                color: #ffffff;
                font-weight: normal;
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">${resp.MC_PREVIEW_TEXT}</span>
        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
                <tr>
                    <td align="center" valign="top" id="bodyCell">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="center" valign="top" id="templateHeader" data-template-container>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                        <tr>
                                            <td valign="top" class="headerContainer">
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
                                                    <tbody class="mcnImageBlockOuter">
                                                        <tr>
                                                            <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                                                                <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;">

                                        <img align="center" alt="" src="https://elfuturoapp.azurewebsites.net/assets/images/QPORTlogo.png" width="106" style="max-width:400px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnRetinaImage">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" id="templateBody" data-template-container>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                        <tr>
                                            <td valign="top" class="bodyContainer">
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                                                                    <tbody>
                                                                        <tr>

                                                                            <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 150%;">
                                                                                <h1 class="null">New Password</h1>
                                                                                <br />
                                                                                <p>
                                                                                    Dear ${resp.USER_NAME},
                                                                                    <br />
                                                                                    <br />
                                                                                    <br />
                                                                                    Your new password for MyOcean is: <b>${resp.LOGIN_CODE_NUMNER}</b>
                                                                                    <br />
                                                                                    <br />
                                                                                    Please use this Password for login.
                                                                                
                                                                                    <br />
                                                                                    <br />
                                                                                    <br />
                                                                                    Thank you.
                                                                                </p>
                                                                                <br />
                                                                                <p style="font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 150%;">
                                                                                    <span>
                                                                                        <b>
                                                                                            Customer Service <br>MyOcean
                                                                                        </b>
                                                                                        <br>
                                                                                    </span>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
                                                    <tbody class="mcnDividerBlockOuter">
                                                        <tr>
                                                            <td class="mcnDividerBlockInner" style="min-width:100%; padding:18px;">
                                                                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <span></span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonBlock" style="min-width:100%;">
                                                    <tbody class="mcnButtonBlockOuter">
                                                        <tr>
                                                        </tr>
                                                    </tbody>
                                                </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
                                                    <tbody class="mcnDividerBlockOuter">
                                                        <tr>
                                                            <td class="mcnDividerBlockInner" style="min-width:100%; padding:18px;">
                                                                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <span></span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 150%;">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr> 			            
                        </table>
                    </td>
                </tr>
            </table>
        </center>
    </body>
    </html>`;
    return template
}