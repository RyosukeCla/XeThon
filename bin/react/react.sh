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

  cp -i $TEMPLATE_FILE_PATH/react/component.jsx $CREATE_FILE_PATH/$C_NAME.jsx
  perl -pi -e s/S_NAME/"$S_NAME"/ $CREATE_FILE_PATH/$C_NAME.jsx
  perl -pi -e s/C_NAME/"$C_NAME"/ $CREATE_FILE_PATH/$C_NAME.jsx

  cp -i $TEMPLATE_FILE_PATH/react/action.jsx $CREATE_FILE_PATH/${S_NAME}Action.jsx
  perl -pi -e s/S_NAME/"$S_NAME"/ $CREATE_FILE_PATH/${S_NAME}Action.jsx
  perl -pi -e s/C_NAME/"$C_NAME"/ $CREATE_FILE_PATH/${S_NAME}Action.jsx

  cp -i $TEMPLATE_FILE_PATH/react/reducer.jsx $CREATE_FILE_PATH/${S_NAME}Reducer.jsx
  perl -pi -e s/S_NAME/"$S_NAME"/ $CREATE_FILE_PATH/${S_NAME}Reducer.jsx
  perl -pi -e s/C_NAME/"$C_NAME"/ $CREATE_FILE_PATH/${S_NAME}Reducer.jsx

  exit 1;
fi
