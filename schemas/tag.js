import React from 'react'
export default {
  title: 'Тэг',
  name: 'tag',
  type: 'document',
  fields: [
    {
      title: 'Название',
      name: 'name',
      type: 'string'

      // Here the user will be prompted to write any string to describe the resource type.
      // There is a way to limit this to a number of preset strings and provide a pull-down
      // or radio buttons to select resource. This is left as an exercise for the reader! See
      // the reference docs!

    },
    {
      title: "Color List",
      description: "Pick a color",
      name: "color",
      type: "colorlist", // required
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%"
        },
        list: [
          { title: "Purple", value: "#8855ff" },
          { title: "BLue", value: "#008df9" },
          { title: "Red", value: "#dc524c" },
          { title: "Green", value: "#7bb86f" },
          { title: "Yellow", value: "#f8cd76" },
          { title: "Brown", value: "#744924" },
        ]
      }
    },
  ],
  preview: {
    select: {
      color: 'color',
      name: 'name',

    },
    prepare({color, name}) {
      return {
        title: name,
        media: <div style={{width: '100%', height: '100%', backgroundColor:color.value}}/>
      }
    }
  }
}

