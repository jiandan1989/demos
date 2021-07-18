export default `<sequenceFlow id="Flow_1d9q74f" sourceRef="Activity_1eq68tk" targetRef="Activity_0o8b5cf" run_state="3" />
<scriptTask id="Activity_0o8b5cf" name="脚本节点" run_state="5">
  <incoming>Flow_1d9q74f</incoming>
  <outgoing>Flow_0b23d51</outgoing>
</scriptTask>
<sequenceFlow id="Flow_0b23d51" sourceRef="Activity_0o8b5cf" targetRef="Event_0idqhms" run_state="4" />
<intermediateCatchEvent id="Event_0idqhms" name="定时" run_state="6">
  <incoming>Flow_0b23d51</incoming>
  <outgoing>Flow_17tttbw</outgoing>
  <timerEventDefinition id="TimerEventDefinition_1w7apdl" />
</intermediateCatchEvent>
<sequenceFlow id="Flow_17tttbw" sourceRef="Event_0idqhms" targetRef="Activity_0qkzn5l" run_state="0" />
<manualTask id="Activity_0qkzn5l" name="手动节点" run_state="7">
  <incoming>Flow_17tttbw</incoming>
  <outgoing>Flow_0h1ee5i</outgoing>
</manualTask>`