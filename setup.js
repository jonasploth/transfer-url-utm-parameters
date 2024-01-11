//Copyright (c) 
//Jonas Ploth 2023

<script type="text/javascript">
(function() {
    var utmInheritingDomains = ["domain1", "domain2"]; // Use an array to hold multiple domains
    var utmRegExp = /(&|\?)utm_[A-Za-z]+=[A-Za-z0-9]+/gi,
        links = document.getElementsByTagName("a"),
        utms = [
            "utm_medium=" + encodeURIComponent("test"), // Replace with actual UTM medium
            "utm_source=" + encodeURIComponent("test"), // Replace with actual UTM source
            "utm_campaign=" + encodeURIComponent("test") // Replace with actual UTM campaign
        ];

    for (var index = 0; index < links.length; index += 1) {
        var tempLink = links[index].href,
            tempParts;

        // Check if link contains any of the domains in the array
        var domainFound = utmInheritingDomains.some(function(domain) {
            return tempLink.indexOf(domain) > 0;
        });

        if (domainFound) {
            tempLink = tempLink.replace(utmRegExp, "");
            tempParts = tempLink.split("#");

            if (tempParts[0].indexOf("?") < 0 ) {
                tempParts[0] += "?" + utms.join("&");
            } else {
                tempParts[0] += "&" + utms.join("&");
            }

            tempLink = tempParts.join("#");
        }

        links[index].href = tempLink;
    }
}());
</script>
