
const mainBox = document.querySelector('#root')

const goToGoogleUsingReact = {
    type: 'a',

    props: {
        href: 'https://www.google.com',
        target: 'blank'
    },
    visit: 'Go to Google Search'
}

function customRender(reactName, mainBoxName) {
    const newReactEle = document.createElement(reactName.type)

    newReactEle.innerHTML = reactName.visit
    // newReactEle.setAttribute('href', reactName.props.href)
    // newReactEle.setAttribute('target', reactName.props.target)
    for (const props in reactName.props) {
        {
            if (props === 'visit') {
                continue;
            }
            newReactEle.setAttribute(props, reactName.props[props])
        }
    }   //better syntax

    mainBoxName.appendChild(newReactEle)
}

customRender (goToGoogleUsingReact, mainBox) 