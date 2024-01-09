# Transfer UTM Parameters from one Page to another

## Purpose of the Script
The script's primary function is to automatically append UTM parameters to all outbound links leading to specified domains. This is particularly useful in marketing campaigns where tracking the performance and source of traffic is crucial. By dynamically adding UTM parameters, the script ensures that all traffic from your website to the targeted domains is properly tagged and trackable in analytics tools.

## Technical Breakdown

### 1. Defining Target Domains:

The script starts by defining a list of domains to which you want to append UTM parameters. For example, if you're running a campaign targeting www.example.com, the script will only modify links pointing to this domain.

### 2. Setting UTM Parameters:

UTM parameters are defined in an array. These might include utm_source, utm_medium, and utm_campaign. The script can be customized to include the specific UTM parameters relevant to your campaign.

### 3. Processing All Links:

The script goes through all the <a> tags (links) on your webpage and checks if the href attribute (the URL) includes any of the target domains.

### 4. Appending UTM Parameters:

If a link points to a target domain, the script then appends the defined UTM parameters to the URL. It checks if the URL already has parameters (using ?) and appends the UTM parameters using either & (if other parameters are present) or ? (if no other parameters are present).

## Implementation Steps

### Define Target Domains and UTM Parameters:

Modify the script to include your specific target domains and the UTM parameters you want to track.

### Integrate the Script:

Place the script in the HTML of your webpage or use a tag manager like Google Tag Manager. If using GTM, ensure it triggers on pages where the script is relevant.

### Testing:

Always test the script in a development environment first. Check if the UTM parameters are correctly appended to the right links. Use tools like browser developer consoles to inspect the modified URLs.

### Deployment and Monitoring:

Once tested, deploy the script on your live site. Monitor your analytics to ensure that the UTM data is being captured correctly. This will help in evaluating the effectiveness of your marketing campaigns.

### Example Use Case
Say you're running a marketing campaign for www.example.com and want to track how much traffic is driven to this site from your website. By using this script, you can automatically tag links directing to www.example.com with specific UTM parameters, allowing you to analyze this traffic in Google Analytics or other similar tools.

This approach is especially beneficial for large websites where manually tagging each link is impractical. It ensures consistent tagging and reliable data for your marketing analytics.
