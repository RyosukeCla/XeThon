#!/bin/bash

COMMAND=$1
NAME=$2
DIR=`dirname $0`/../..
CREATE_FILE_PATH=$DIR/app/frontend
TEMPLATE_FILE_PATH=`dirname $0`/template
HELP="
==== HELP ===\n
$ react g/generate <NAME>
"

if [ "$COMMAND" = "h" ] || [ "$COMMAND" = "help" ] || [ $# -eq 0 ]; then
  echo $HELP
  exit 1;
fi

# 3 arguments
if [ $# -ne 2 ]
then
    echo $HELP;
    exit 1;
fi

if [ "$COMMAND" = "g" -o "$COMMAND" = "generate" ]; then
  v=$NAME
  C_NAME=`echo ${v:0:1} | tr  '[a-z]' '[A-Z]'`${v:1}
  S_NAME=`echo ${v:0:1} | tr  '[A-Z]' '[a-z]'`${v:1}

  mkdir $CREATE_FILE_PATH/$S_NAME

  CREATE_FILE_PATH=$DIR/app/frontend/$S_NAME

  # create component
  cp -i $TEMPLATE_FILE_PATH/react/component.jsx $CREATE_FILE_PATH/$C_NAME.jsx
  perl -pi -e s/S_NAME/"$S_NAME"/ $CREATE_FILE_PATH/$C_NAME.jsx
  perl -pi -e s/C_NAME/"$C_NAME"/ $CREATE_FILE_PATH/$C_NAME.jsx

  # create action
  cp -i $TEMPLATE_FILE_PATH/react/actions.jsx $CREATE_FILE_PATH/actions.jsx
  perl -pi -e s/S_NAME/"$S_NAME"/ $CREATE_FILE_PATH/actions.jsx
  perl -pi -e s/C_NAME/"$C_NAME"/ $CREATE_FILE_PATH/actions.jsx

  # create reducer
  cp -i $TEMPLATE_FILE_PATH/react/reducer.jsx $CREATE_FILE_PATH/reducer.jsx
  perl -pi -e s/S_NAME/"$S_NAME"/ $CREATE_FILE_PATH/reducer.jsx
  perl -pi -e s/C_NAME/"$C_NAME"/ $CREATE_FILE_PATH/reducer.jsx

  # import reducer to rootReducer
  REDUCER_PATH=$DIR/app/frontend/rootReducer.jsx
  IMPORT="import $S_NAME from \'\.\/$S_NAME\/reducer\';"
  gsed -i "/^\/\/reducers imports$/a $IMPORT" $REDUCER_PATH
  IMPORT="\ \ $S_NAME,"
  gsed -i "/^\/\/reducers$/a $IMPORT" $REDUCER_PATH

  exit 1;
  # create scss
  CREATE_FILE_PATH=$DIR/app/assets/sass/components

  cp -i $TEMPLATE_FILE_PATH/react/style.scss $CREATE_FILE_PATH/_${S_NAME}.scss
  perl -pi -e s/S_NAME/"$S_NAME"/ $CREATE_FILE_PATH/_${S_NAME}.scss
  perl -pi -e s/C_NAME/"$C_NAME"/ $CREATE_FILE_PATH/_${S_NAME}.scss

  # scss import
  STYLE_PATH=$DIR/app/assets/sass/style.scss
  IMPORT="@import \\\"components\/$S_NAME\\\";"
  gsed -i "/^\/\/components$/a $IMPORT" $STYLE_PATH
  exit 1;
fi
