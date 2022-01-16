
exports.forgotPassword = (subject, password, resp) => {
    let template = `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <!-- NAME: EDUCATE -->
        <!--[if gte mso 15]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
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

            h1, h2, h3, h4, h5, h6 {
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
            /*
            @tab Page
            @section Heading 1
            @style heading 1
            */
            h1 {
                /*@editable*/ color: #222222;
                /*@editable*/ font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                /*@editable*/ font-size: 24px;
                /*@editable*/ font-style: normal;
                /*@editable*/ font-weight: bold;
                /*@editable*/ line-height: 150%;
                /*@editable*/ letter-spacing: normal;
                /*@editable*/ text-align: left;
            }
            /*
            @tab Page
            @section Heading 2
            @style heading 2
            */
            h2 {
                /*@editable*/ color: #222222;
                /*@editable*/ font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                /*@editable*/ font-size: 28px;
                /*@editable*/ font-style: normal;
                /*@editable*/ font-weight: bold;
                /*@editable*/ line-height: 150%;
                /*@editable*/ letter-spacing: normal;
                /*@editable*/ text-align: left;
            }
            /*
            @tab Page
            @section Heading 3
            @style heading 3
            */
            h3 {
                /*@editable*/ color: #444444;
                /*@editable*/ font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                /*@editable*/ font-size: 22px;
                /*@editable*/ font-style: normal;
                /*@editable*/ font-weight: bold;
                /*@editable*/ line-height: 150%;
                /*@editable*/ letter-spacing: normal;
                /*@editable*/ text-align: left;
            }
            /*
            @tab Page
            @section Heading 4
            @style heading 4
            */
            h4 {
                /*@editable*/ color: #949494;
                /*@editable*/ font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                /*@editable*/ font-size: 20px;
                /*@editable*/ font-style: italic;
                /*@editable*/ font-weight: normal;
                /*@editable*/ line-height: 125%;
                /*@editable*/ letter-spacing: normal;
                /*@editable*/ text-align: left;
            }
            /*
            @tab Header
            @section Header Container Style
            */
            #templateHeader {
                /*@editable*/ background-color: #f4f4f4;
                /*@editable*/ background-image: none;
                /*@editable*/ background-repeat: no-repeat;
                /*@editable*/ background-position: center;
                /*@editable*/ background-size: cover;
                /*@editable*/ border-top: 0;
                /*@editable*/ border-bottom: 0;
                /*@editable*/ padding-top: 0px;
                /*@editable*/ padding-bottom: 0px;
            }
            /*
            @tab Header
            @section Header Interior Style
            */
            .headerContainer {
                /*@editable*/ background-color: #00abcd;
                /*@editable*/ background-image: none;
                /*@editable*/ background-repeat: no-repeat;
                /*@editable*/ background-position: center;
                /*@editable*/ background-size: cover;
                /*@editable*/ border-top: 0;
                /*@editable*/ border-bottom: 0;
                /*@editable*/ padding-top: 26px;
                /*@editable*/ padding-bottom: 26px;
            }
                /*
            @tab Header
            @section Header Text
            */
                .headerContainer .mcnTextContent, .headerContainer .mcnTextContent p {
                    /*@editable*/ color: #757575;
                    /*@editable*/ font-family: Helvetica;
                    /*@editable*/ font-size: 16px;
                    /*@editable*/ line-height: 150%;
                    /*@editable*/ text-align: left;
                }
                    /*
            @tab Header
            @section Header Link
            */
                    .headerContainer .mcnTextContent a, .headerContainer .mcnTextContent p a {
                        /*@editable*/ color: #007C89;
                        /*@editable*/ font-weight: normal;
                        /*@editable*/ text-decoration: underline;
                    }
            /*
            @tab Body
            @section Body Container Style
            */
            #templateBody {
                /*@editable*/ background-color: #f4f4f4;
                /*@editable*/ background-image: none;
                /*@editable*/ background-repeat: no-repeat;
                /*@editable*/ background-position: center;
                /*@editable*/ background-size: cover;
                /*@editable*/ border-top: 0;
                /*@editable*/ border-bottom: 0;
                /*@editable*/ padding-top: 0px;
                /*@editable*/ padding-bottom: 0px;
            }
            /*
            @tab Body
            @section Body Interior Style
            */
            .bodyContainer {
                /*@editable*/ background-color: #ffffff;
                /*@editable*/ background-image: none;
                /*@editable*/ background-repeat: no-repeat;
                /*@editable*/ background-position: center;
                /*@editable*/ background-size: cover;
                /*@editable*/ border-top: 0;
                /*@editable*/ border-bottom: 0;
                /*@editable*/ padding-top: 27px;
                /*@editable*/ padding-bottom: 63px;
            }
                /*
            @tab Body
            @section Body Text
            */
                .bodyContainer .mcnTextContent, .bodyContainer .mcnTextContent p {
                    /*@editable*/ color: #333333;
                    /*@editable*/ font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    /*@editable*/ font-size: 12px;
                    /*@editable*/ line-height: 150%;
                    /*@editable*/ text-align: left;
                }
                    /*
            @tab Body
            @section Body Link
            */
                    .bodyContainer .mcnTextContent a, .bodyContainer .mcnTextContent p a {
                        /*@editable*/ color: #00abcd;
                        /*@editable*/ font-weight: normal;
                        /*@editable*/ text-decoration: underline;
                    }
            /*
            @tab Footer
            @section Footer Style
            */
            #templateFooter {
                /*@editable*/ background-color: #f4f4f4;
                /*@editable*/ background-image: none;
                /*@editable*/ background-repeat: no-repeat;
                /*@editable*/ background-position: center;
                /*@editable*/ background-size: cover;
                /*@editable*/ border-top: 0;
                /*@editable*/ border-bottom: 0;
                /*@editable*/ padding-top: 0px;
                /*@editable*/ padding-bottom: 0px;
            }
            /*
            @tab Footer
            @section Footer Interior Style
            */
            .footerContainer {
                /*@editable*/ background-color: #333333;
                /*@editable*/ background-image: none;
                /*@editable*/ background-repeat: no-repeat;
                /*@editable*/ background-position: center;
                /*@editable*/ background-size: cover;
                /*@editable*/ border-top: 0;
                /*@editable*/ border-bottom: 0;
                /*@editable*/ padding-top: 45px;
                /*@editable*/ padding-bottom: 63px;
            }
                /*
            @tab Footer
            @section Footer Text
            */
                .footerContainer .mcnTextContent, .footerContainer .mcnTextContent p {
                    /*@editable*/ color: #FFFFFF;
                    /*@editable*/ font-family: Helvetica;
                    /*@editable*/ font-size: 12px;
                    /*@editable*/ line-height: 150%;
                    /*@editable*/ text-align: center;
                }
                    /*
            @tab Footer
            @section Footer Link
            */
                    .footerContainer .mcnTextContent a, .footerContainer .mcnTextContent p a {
                        /*@editable*/ color: #ffffff;
                        /*@editable*/ font-weight: normal;
                        /*@editable*/ text-decoration: underline;
                    }

            @media only screen and (min-width:768px) {
                .templateContainer {
                    width: 600px !important;
                }
            }

            @media only screen and (max-width: 480px) {
                body, table, td, p, a, li, blockquote {
                    -webkit-text-size-adjust: none !important;
                }
            }

            @media only screen and (max-width: 480px) {
                body {
                    width: 100% !important;
                    min-width: 100% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnRetinaImage {
                    max-width: 100% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnImage {
                    width: 100% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnCartContainer, .mcnCaptionTopContent, .mcnRecContentContainer, .mcnCaptionBottomContent, .mcnTextContentContainer, .mcnBoxedTextContentContainer, .mcnImageGroupContentContainer, .mcnCaptionLeftTextContentContainer, .mcnCaptionRightTextContentContainer, .mcnCaptionLeftImageContentContainer, .mcnCaptionRightImageContentContainer, .mcnImageCardLeftTextContentContainer, .mcnImageCardRightTextContentContainer, .mcnImageCardLeftImageContentContainer, .mcnImageCardRightImageContentContainer {
                    max-width: 100% !important;
                    width: 100% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnBoxedTextContentContainer {
                    min-width: 100% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnImageGroupContent {
                    padding: 9px !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnCaptionLeftContentOuter .mcnTextContent, .mcnCaptionRightContentOuter .mcnTextContent {
                    padding-top: 9px !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnImageCardTopImageContent, .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent, .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
                    padding-top: 18px !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnImageCardBottomImageContent {
                    padding-bottom: 9px !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnImageGroupBlockInner {
                    padding-top: 0 !important;
                    padding-bottom: 0 !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnImageGroupBlockOuter {
                    padding-top: 9px !important;
                    padding-bottom: 9px !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnTextContent, .mcnBoxedTextContentColumn {
                    padding-right: 18px !important;
                    padding-left: 18px !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcnImageCardLeftImageContent, .mcnImageCardRightImageContent {
                    padding-right: 18px !important;
                    padding-bottom: 0 !important;
                    padding-left: 18px !important;
                }
            }

            @media only screen and (max-width: 480px) {
                .mcpreview-image-uploader {
                    display: none !important;
                    width: 100% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Heading 1
            @tip Make the first-level headings larger in size for better readability on small screens.
            */
                h1 {
                    /*@editable*/ font-size: 30px !important;
                    /*@editable*/ line-height: 125% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Heading 2
            @tip Make the second-level headings larger in size for better readability on small screens.
            */
                h2 {
                    /*@editable*/ font-size: 26px !important;
                    /*@editable*/ line-height: 125% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Heading 3
            @tip Make the third-level headings larger in size for better readability on small screens.
            */
                h3 {
                    /*@editable*/ font-size: 20px !important;
                    /*@editable*/ line-height: 150% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Heading 4
            @tip Make the fourth-level headings larger in size for better readability on small screens.
            */
                h4 {
                    /*@editable*/ font-size: 18px !important;
                    /*@editable*/ line-height: 150% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Boxed Text
            @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
            */
                .mcnBoxedTextContentContainer .mcnTextContent, .mcnBoxedTextContentContainer .mcnTextContent p {
                    /*@editable*/ font-size: 14px !important;
                    /*@editable*/ line-height: 150% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Header Text
            @tip Make the header text larger in size for better readability on small screens.
            */
                .headerContainer .mcnTextContent, .headerContainer .mcnTextContent p {
                    /*@editable*/ font-size: 16px !important;
                    /*@editable*/ line-height: 150% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Body Text
            @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
            */
                .bodyContainer .mcnTextContent, .bodyContainer .mcnTextContent p {
                    /*@editable*/ font-size: 16px !important;
                    /*@editable*/ line-height: 150% !important;
                }
            }

            @media only screen and (max-width: 480px) {
                /*
            @tab Mobile Styles
            @section Footer Text
            @tip Make the footer content text larger in size for better readability on small screens.
            */
                .footerContainer .mcnTextContent, .footerContainer .mcnTextContent p {
                    /*@editable*/ font-size: 14px !important;
                    /*@editable*/ line-height: 150% !important;
                }
            }
        </style>
    </head>
    <body>
        <!--*|IF:MC_PREVIEW_TEXT|*-->
        <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">${resp.MC_PREVIEW_TEXT}</span><!--<![endif]-->
        <!--*|END:IF|*-->
        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
                <tr>
                    <td align="center" valign="top" id="bodyCell">
                        <!-- BEGIN TEMPLATE // -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="center" valign="top" id="templateHeader" data-template-container>
                                    <!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->
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
                                    <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" id="templateBody" data-template-container>
                                    <!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                        <tr>
                                            <td valign="top" class="bodyContainer">
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                                                                <!--[if mso]>
                                                                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                                                                <tr>
                                                                <![endif]-->
                                                                <!--[if mso]>
                                                                <td valign="top" width="600" style="width:600px;">
                                                                <![endif]-->
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                                                                    <tbody>
                                                                        <tr>

                                                                            <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 150%;">
                                                                                <h1 class="null">New Password</h1>
                                                                                <br />
                                                                                <p>
                                                                                    Dear {*USER_NAME*},
                                                                                    <br />
                                                                                    <br />
                                                                                    <br />
                                                                                    Your new password for Connect is: <b>{*LOGIN_CODE_NUMNER*}</b>
                                                                                    <br />
                                                                                    <br />
                                                                                    Please use this Password for login.
                                                                                
                                                                                    <br />
                                                                                    <br />
                                                                                    <br />
                                                                                    Thank you.
                                                                                </p>
                                                                                <br />
                                                                                <p style="font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 150%;">
                                                                                    <span>
                                                                                        <b>
                                                                                            Customer Service <br>Connect
                                                                                        </b>
                                                                                        <br>
                                                                                    </span>
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]>
                                                                </td>
                                                                <![endif]-->
                                                                <!--[if mso]>
                                                                </tr>
                                                                </table>
                                                                <![endif]-->
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
                                                                <!--
                                                                                <td class="mcnDividerBlockInner" style="padding: 18px;">
                                                                                <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
                                                                -->
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
                                                                <!--
                                                                                <td class="mcnDividerBlockInner" style="padding: 18px;">
                                                                                <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
                                                                -->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                                                    <tbody class="mcnTextBlockOuter">
                                                        <tr>
                                                            <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                                                                <!--[if mso]>
                                                                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                                                                <tr>
                                                                <![endif]-->
                                                                <!--[if mso]>
                                                                <td valign="top" width="600" style="width:600px;">
                                                                <![endif]-->
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                                                                    <tbody>
                                                                        <tr>

                                                                            <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px; font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 150%;">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]>
                                                                </td>
                                                                <![endif]-->
                                                                <!--[if mso]>
                                                                </tr>
                                                                </table>
                                                                <![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                </td>
                            </tr> 			            
                        </table>
                        <!-- // END TEMPLATE -->
                    </td>
                </tr>
            </table>
        </center>
    </body>
    </html>`;
    return template
}