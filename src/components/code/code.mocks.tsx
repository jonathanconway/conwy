export function createCodePropsMock() {
  return {
    className: "language-javascript",
    children:
      "\n" +
      "  function ShareholderValueEditor({ companyId, shareholder }) {\n" +
      "    ...\n" +
      "    const handleClickSave = async (e) => {\n" +
      "      if (othersAndThisStakesSum <= 100) {\n" +
      "        ...\n" +
      "        const patchStakeResult = await patchShareholderStake({\n" +
      "          id: shareholder.id,\n" +
      "          stake,\n" +
      "        });\n" +
      "\n" +
      "        captureEvent({\n" +
      '          message: "useShareholderStakeEditor/changeStakePatchCompleted",\n' +
      "          tags: event.tags,\n" +
      "          contexts: {\n" +
      '            ["useShareholderStakeEditor/changeStakePatchCompleted"]: {\n' +
      "              ...event.data,\n" +
      "              patchStakeResult,\n" +
      "            },\n" +
      "          },\n" +
      "        });\n" +
      "\n" +
      "        const refetchShareholdersResult = await refetchShareholders();\n" +
      "\n" +
      "        captureEvent({\n" +
      '          message: "useShareholderStakeEditor/changeStakeRefreshCompleted",\n' +
      "          tags: event.tags,\n" +
      "          contexts: {\n" +
      '            ["useShareholderStakeEditor/changeStakeRefreshCompleted"]: {\n' +
      "              ...event.data,\n" +
      "              refetchShareholdersResult,\n" +
      "            },\n" +
      "          },\n" +
      "        });\n" +
      "      } else {\n" +
      "        ...\n" +
      "      }\n" +
      "    }\n" +
      "    ...\n" +
      "  }\n",
  };
}
