// ** Code to find the thing that we want to change. In this example it is the div.pixels.
const pixelsTag = document.querySelector('div.pixels');

// ** Code to get the info on scroll
const bodyTag = document.querySelector('body')

// ** Code to select the div.progress where we will then be able to link the const percentage to the width of the progressTag when we will scroll.
const progressTag = document.querySelector("div.progress")

// ** Code to select the section HTML tags which are then used along with the HTML data attribute to make changes on scroll
const sections = document.querySelectorAll("section")

// ** Code to select the div.client classes
const clientTag = document.querySelector("div.client")

// ** Code to select the div.page classes
const pageTag = document.querySelector("div.page")

// ** Code to select the header HTML tag
const headerTag = document.querySelector("header")


// when we scroll the page, make things parallax
// we want to move certain types based on how far they are from an anchor point. The anchor point in this example is the middle of the section.
// How far should we parallax? Well, it's a ratio of the middle distance scrolled to the middle point of the anchor
document.addEventListener("scroll", function () {
    //   distance from the top of the viewport to the midpoint
    const leftViewport = window.pageXOffset
    //   distance from the top of the viewport to the midpoint plus half the height of the entire page.
    const midViewport = leftViewport + (window.innerWidth / 2)

    //   check to see if the two const above are correct
    //   what you should be seeing in the console log and you scroll to the top of the page it should be 300.
    //   console.log(midViewport)

    //   *** Code to determine the midpoint for each section
    sections.forEach(section => {
        //     code to determine how far down the page the top of each section is
        const leftSection = section.offsetLeft
        //     code to determine the midpoint for each section
        const midSection = leftSection + (section.offsetWidth / 2)
        //     code to check if the midSection works. In the console log you should see the same three numbers repeating as you scroll down the page.
        //     console.log(midSection)

        //     code to determine the distance between midSection and MidViewport. How far away the
        const distanceToSection = midViewport - midSection
        //   code to check if the distanceToSection works. In the console log you will see four different numbers that keep changing as you scroll. These numbers relate to the distance from each Section Midpoint as you're scrolling. For example if you scroll all the way down to the bottom of the page the last number should be 0 because you are 0px away from the midpoint of Section 4.
        //     ****** in my code currently I'm seeing section 4 listed as 15px when I'm scrolled all the way to the bottom. I don't know why this is but will have to investigate this. It has something to do with the height and width of the viewport. If it is bigger than 1000px in either direction the number is 0px.
        //     console.log(distanceToSection)

        //     code to add movement to ALL shapes
        const parallaxTags = section.querySelectorAll(`[data-parallax]`)

        //     loop over each parallaxed tag
        parallaxTags.forEach(tag => {
            const speed = parseFloat(tag.getAttribute("data-parallax"))
            tag.style.transform = `translate(${distanceToSection * speed}px, 0)`
        })

        // code to add movement to the square tags
        //     const tag = section.querySelector("div.square")
        //     code to get the value for the speed of each square. Each square in the html has a data attribute on it with a percentage which we will be pulling into our code below and multiplying it by the distanceToSection. In order to make the attribute a number we need to make sure that we add parseFloat before the string. parseFloat will turn this string into a decimal number.
        //      const speed = parseFloat(tag.getAttribute("data-parallax"))
        //     tag.style.transform = `translate(0, ${distanceToSection * speed}px)`







    })
})
