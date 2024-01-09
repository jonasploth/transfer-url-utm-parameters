# Transfer UTM Parameters from one Page to another

## Purpose of the Script
The script's primary function is to automatically append UTM parameters to all outbound links leading to specified domains. This is particularly useful in marketing campaigns where tracking the performance and source of traffic is crucial. By dynamically adding UTM parameters, the script ensures that all traffic from your website to the targeted domains is properly tagged and trackable in analytics tools.

## Technical Breakdown

### 1. Defining Target Domains:

    The script starts by defining a list of domains to which you want to append UTM parameters. For example, if you're running a campaign targeting www.example.com, the script will only modify links         pointing to this domain.

### 2. Setting UTM Parameters:

    UTM parameters are defined in an array. These might include utm_source, utm_medium, and utm_campaign. The script can be customized to include the specific UTM parameters relevant to your campaign.

### 3. Processing All Links:

The script goes through all the <a> tags (links) on your webpage and checks if the href attribute (the URL) includes any of the target domains.

### 4. Appending UTM Parameters:

If a link points to a target domain, the script then appends the defined UTM parameters to the URL. It checks if the URL already has parameters (using ?) and appends the UTM parameters using either & (if other parameters are present) or ? (if no other parameters are present).

## Implementation Steps

## Step 1: Setting Up URL Variables in Google Tag Manager (GTM)
Before integrating the script, you need to set up variables in GTM to capture UTM parameters:

Open GTM: Log into your GTM account and select your website's container.

Create New Variables:

## Navigate to "Variables" in the left-hand menu.
    Click "New" to create a new variable.
    Choose "URL" as the variable type.
    For each UTM parameter (like utm_source, utm_medium, utm_campaign), create a corresponding variable:
    Variable Configuration: Select "URL" for the variable type.
    Component Type: Choose "Query" and input the query key (e.g., utm_source for the source variable).
    Name Your Variable: Name it something recognizable like UTM Source.
 ## Save the Variables: After setting up the variables, save them.

## Step 2: The Script
    Now let's break down the JavaScript script:

    To get the Script go to https://github.com/get-utm-clickfunnels/main/setup.js 

  ## Script Explanation
    Target Domains: The utmInheritingDomains array holds the domains you want to append UTM parameters to.

    Loop Through Links: The script iterates over every link (<a> tag) on your page.

    Check Domain: For each link, it checks if the href contains any of the target domains.

    Append UTM Parameters: If the domain matches, it appends the UTM parameters (utm_source, utm_medium, utm_campaign) to the URL.

    It uses GTM variables ({{UTM Source}}, etc.) to get the values of these parameters.

    It handles URL formatting, checking if a ? already exists in the URL to decide whether to append with & or ?.

  ## Step 3: Implementing the Script
    Add the Script to GTM:

    Create a new "Custom HTML" tag in GTM and paste the script into it.
    Ensure you replace www.target-domain.com with your actual target domain(s).

## Set Up Triggers:

    Define when this tag should fire. Usually, it's on all pages or specific pages where you want the UTM parameters appended.
## Test and Debug:

    Use GTM's preview mode to test the script on your site.
    Inspect the links using your browser's developer tools to ensure UTM parameters are being appended correctly.
 ## Publish:

    Once you're satisfied with the testing, publish the changes in GTM.
    Conclusion
    This setup allows you to dynamically append UTM parameters to outbound links targeting specific domains. It's efficient for tracking and analyzing referral traffic, especially useful in extensive       digital marketing campaigns where manual tagging is impractical. With GTM and this script, you ensure consistent and accurate tracking across your site.







    
### Example Use Case
Say you're running a marketing campaign for www.gooogle.com and want to track how much traffic is driven to this site from your website. By using this script, you can automatically tag links directing to shop.google.com with specific UTM parameters, allowing you to analyze this traffic in Google Analytics or other similar tools.

This approach is especially beneficial for large websites where manually tagging each link is impractical. It ensures consistent tagging and reliable data for your marketing analytics.
